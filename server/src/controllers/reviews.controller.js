import { pool } from "../db.js";
import dotenv from 'dotenv'
import { Resend } from 'resend';

const API_KEY = process.env.API_KEY;
const resend = new Resend(API_KEY);
dotenv.config()



export const getReviews = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Reviews');
        res.json(rows);
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while getting the reviews' });
    }
}

export const getReviewById = async (req, res) => {
    try {
        const id = req.params.id;
        const [rows] = await pool.query('SELECT * FROM Reviews WHERE id = ?', [id]);
        if (rows.length <= 0) return res.status(404).json({
            message: 'Review not found'
        });
        res.json(rows[0]);
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while getting the review by id' });
    }
}
export const createReview = async (req, res) => {
    try {
        const { puntuacion, titulo, description, nombre } = req.body;

        // Verificar que todos los campos requeridos estén presentes
        if (!puntuacion || !titulo || !description || !nombre) {
            return res.status(400).send({ error: 'Missing required fields' });
        }

        const [rows] = await pool.query('INSERT INTO Reviews (puntuacion, titulo, description, nombre) VALUES (?, ?, ?, ?)', [puntuacion, titulo, description, nombre]);

        // Enviar un correo electrónico
        const emailResponse = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: ['iqenglishapp@gmail.com'],
            subject: 'Nuevo comentario creado',
            html: `<strong>Alguien ha creado un nuevo comentario:</strong><br>Id: ${rows.insertId}`,
        });

        // Capturar el ID del correo electrónico
        const emailId = emailResponse.data.id;

        res.send({
            id: rows.insertId,
            titulo,
            emailId
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'An error occurred while creating the review' });
    }
}


export const updateReview = async (req, res) => {
    try {
        const { id } = req.params;
        const { puntuacion, titulo, description, nombre } = req.body;
        const { userId } = req

        // Verificar que el usuario sea de tipo admin
        const [users] = await pool.query('SELECT * FROM advisors WHERE id = ?', [userId]);
        if (users.length <= 0) {
            return res.status(400).send({ error: 'Invalid user id' });
        }

        const user = users[0];
        if (user.user_type !== 'admin') {
            return res.status(403).send({ error: 'Unauthorized' });
        }

        // Actualizar la review
        const [result] = await pool.query('UPDATE Reviews SET puntuacion = IFNULL(?, puntuacion), titulo = IFNULL(?, titulo), description = IFNULL(?, description), nombre = IFNULL(?, nombre) WHERE id = ?', [puntuacion, titulo, description, nombre, id]);

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Review not found'
        })

        const [rows] = await pool.query('SELECT * FROM Reviews WHERE id = ?', [id])
        res.json(rows[0]);

    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'An error occurred while updating the review' });
    }
}

export const deleteReview = async (req, res) => {
    try {
        const { userId } = req

        // Verificar que el usuario sea de tipo admin
        const [users] = await pool.query('SELECT * FROM advisors WHERE id = ?', [userId]);
        if (users.length <= 0) {
            return res.status(400).send({ error: 'Invalid user id' });
        }

        const user = users[0];
        if (user.user_type !== 'admin') {
            return res.status(403).send({ error: 'Unauthorized' });
        }

        // Eliminar la review
        const [result] = await pool.query('DELETE FROM Reviews WHERE id = ?', [req.params.id]);

        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Review not found'
        });
        res.sendStatus(204);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'An error occurred while deleting the review' });
    }
};
