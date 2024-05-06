import axios from "axios";

const baseUrl = 'http://localhost:3001/api/advisors/register';

export default async function register({ username, password, userType, token }) {


    console.log("Datos:",  username, password, userType, token )
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        };

        const response = await axios.post(baseUrl, {
            username,
            password,
            userType
        }, config);

        if (response.status !== 200) {
            throw new Error('Response is NOT ok');
        }

        return response.data;

    } catch (error) {
        throw error;
    }
}
