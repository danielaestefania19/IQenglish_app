import axios from "axios";

const baseUrl = 'http://localhost:3001/api/reviews';

export default async function getReviews() {
    try {

        const response = await axios.get(baseUrl);

        if (response.status !== 200) {
            throw new Error('Response is NOT ok');
        }

        return response.data;

    } catch (error) {
        throw error;
    }
}
