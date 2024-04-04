import { pool } from "../db.js"
import bcryptjs from 'bcryptjs'
import jsonwebtoken from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()


export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Comprobar que todos los datos estén completos
        if (!username || !password) {
            return res.status(400).send({ error: 'Missing username or password' });
        }

        const [users] = await pool.query('SELECT * FROM advisors WHERE username = ?', [username]);
        if (users.length <= 0) {
            return res.status(400).send({ error: 'Invalid username or password' });
        }

        // Obtener la contraseña hasheada del usuario
        const user = users[0];
        const hashedPassword = user.password;

        // Comparar la contraseña proporcionada con la contraseña hasheada
        const correctPassword = await bcryptjs.compare(password, hashedPassword);

        if (!correctPassword) {
            return res.status(400).send({ error: 'Invalid username or password' });
        }

        const userForToken = {
            id: user.id,
            username: user.username
        }

        const token = jsonwebtoken.sign(
            { userForToken },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRATION }
        );

        res.send({status: "ok", message: "User is logged in successfully", token: token, username: user.username});
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'An error occurred during login' });
    }
}


export const register = async (req, res) => {

    try {
        const { username, password } = req.body;

        // Comprobar que todos los datos estén completos
        if (!username || !password) {
            return res.status(400).send({ error: 'Missing username or password' });
        }

        // Comprobar que el usuario sea inexistente
        const [users] = await pool.query('SELECT * FROM advisors WHERE username = ?', [username]);
        if (users.length > 0) {
            return res.status(400).send({ error: 'Username already exists' });
        }

        const salt = await bcryptjs.genSalt()
        const hashPassword = await bcryptjs.hash(password, salt)

        await pool.query('INSERT INTO advisors (username, password, user_type) VALUES (?, ?, ?)', [username, hashPassword, 'advisor']);

        res.send({ message: 'Advisor registered successfully' });

        console.log(hashPassword)
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'An error occurred while registering the admin' });
    }
}


export const updateAdvisors = async (req, res) => {

}

export const deleteAdvisors = async (req, res) => {

}

export const loginAdmin = async (req, res) => {

}

export const registerAdmin = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Comprobar que todos los datos estén completos
        if (!username || !password) {
            return res.status(400).send({ error: 'Missing username or password' });
        }

        // Comprobar que el usuario sea inexistente
        const [users] = await pool.query('SELECT * FROM advisors WHERE username = ?', [username]);
        if (users.length > 0) {
            return res.status(400).send({ error: 'Username already exists' });
        }
        const salt = await bcryptjs.genSalt()
        const hashPassword = await bcryptjs.hash(password, salt)

        await pool.query('INSERT INTO advisors (username, password, user_type) VALUES (?, ?, ?)', [username, hashPassword, 'admin']);

        res.send({ message: 'Admin registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'An error occurred while registering the admin' });
    }
}


