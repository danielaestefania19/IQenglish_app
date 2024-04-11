import axios from "axios";

const baseUrl = 'http://localhost:3001/api/advisors/login';

export default async function login_user({ username, password }) {
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

        const { token  } = response.data; // Asume que el tipo de usuario se devuelve en la respuesta

        return { token  }; // Devuelve el token y el tipo de usuario

    } catch (error) {
        throw error;
    }
}
