import axios from "axios";

const baseUrl = 'http://localhost:3001/api/reviews';

export default async function createReview({ puntuacion, titulo, description, nombre }) {
    try {
        const response = await axios.post(baseUrl, {
            puntuacion,
            titulo,
            description,
            nombre
        });

        if (response.status !== 200) {
            throw new Error('Response is NOT ok');
        }

        return response.data;
    } catch (error) {
        throw error;
    }
}
