import axios from "axios";

const baseUrl = 'http://localhost:3001/api/advisor/verify';

export default async function verifyToken(token) {
    try {
        const response = await axios.post(baseUrl, { token });

        if (response.status !== 200) {
            throw new Error('Response is NOT ok');
        }

        return response.data.valid;

    } catch (error) {
        throw error;
    }
}
