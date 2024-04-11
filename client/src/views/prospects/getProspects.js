import axios from "axios";

const baseUrl = 'http://localhost:3001/api/prospects';

export default async function getProspects(/* token */) {
    try {
        // Comentamos la configuración del token para pruebas de desarrollo
        // const config = {
        //     headers: {
        //         Authorization: `Bearer ${token}`,
        //         "Content-Type": "application/json"
        //     }
        // };

        const response = await axios.get(baseUrl /*, config */);

        if (response.status !== 200) {
            throw new Error('Response is NOT ok');
        }

        return response.data;

    } catch (error) {
        throw error;
    }
}
