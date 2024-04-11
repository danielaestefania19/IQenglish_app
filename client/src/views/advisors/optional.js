import axios from "axios";

const baseUrl = 'http://localhost:3001/api/advisors';

export async function updateAdvisors({ id, username, password, userType, token }) {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        };

        const response = await axios.patch(`${baseUrl}/${id}`, {
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

export async function deleteAdvisors({ id, token }) {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        };

        const response = await axios.delete(`${baseUrl}/${id}`, config);

        if (response.status !== 204) {
            throw new Error('Response is NOT ok');
        }

        return response.status;

    } catch (error) {
        throw error;
    }
}