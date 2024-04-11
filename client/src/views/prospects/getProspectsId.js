import axios from "axios";

const baseUrl = 'http://localhost:3001/api/prospects';

export default async function getProspectById(id, token) {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        };

        const response = await axios.get(`${baseUrl}/${id}`, config);

        if (response.status !== 200) {
            throw new Error('Response is NOT ok');
        }

        return response.data;

    } catch (error) {
        throw error;
    }
}
