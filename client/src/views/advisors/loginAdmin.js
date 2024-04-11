import axios from "axios";

const baseUrl = 'http://localhost:3001/api/advisors/admin/login';

export default async function loginAdmin({ username, password }) {
    try {
        const response = await axios.post(baseUrl, {
            username,
            password
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response.status !== 200) {
            throw new Error('Response is NOT ok');
        }

        const { token } = response.data;


        return token;

    } catch (error) {
        throw error;
    }
}

