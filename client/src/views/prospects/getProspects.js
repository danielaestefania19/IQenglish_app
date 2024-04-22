import axios from "axios";

const baseUrl = 'http://localhost:3001/api/prospects';

export default async function getProspects(token) {
   
    const tokenjwt = token.token
    console.log("Nuevo token", tokenjwt)
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${tokenjwt}`,
                "Content-Type": "application/json"
            }
        };

        const response = await axios.get(baseUrl, config);

        if (response.status !== 200) {
            throw new Error('Response is NOT ok');
        }

        return response.data;

    } catch (error) {
        throw error;
    }
}
