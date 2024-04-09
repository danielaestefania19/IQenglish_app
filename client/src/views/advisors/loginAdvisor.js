import axios from "axios";

const baseUrl = 'http://localhost:3001/api/advisors/login';

export default async function loginAdvisor({ username, password }) {
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

        const { jwt } = response.data;
        return jwt;

    } catch (error) {
        throw error;
    }
}
