import axios from "axios";

const baseUrl = 'http://localhost:3001/api/prospects';

export async function updateProspects({ id, name, lastname, email, phone_number, age, address, token }) {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        };

        const response = await axios.patch(`${baseUrl}/${id}`, {
            name,
            lastname,
            email,
            phone_number,
            age,
            address
        }, config);

        if (response.status !== 200) {
            throw new Error('Response is NOT ok');
        }

        return response.data;

    } catch (error) {
        throw error;
    }
}

export async function deleteProspects({id, token}) {

   

    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        };

        const response = await axios.delete(`${baseUrl}/${id.id}`, config);

        if (response.status !== 204) {
            throw new Error('Response is NOT ok');
        }

        return response.status;


    } catch (error) {
        throw error;
    }
}
