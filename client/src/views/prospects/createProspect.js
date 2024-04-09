import axios from "axios";

const baseUrl = 'http://localhost:3001/api/prospects';

export default async function createProspect({ name, lastname, email, phone_number, age, addresses, token }) {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        };

        const response = await axios.post(baseUrl, {
            name,
            lastname,
            email,
            phone_number,
            age,
            addresses
        }, config);

        if (response.status !== 200) {
            throw new Error('Response is NOT ok');
        }

        return response.data;

    } catch (error) {
        throw error;
    }
}
