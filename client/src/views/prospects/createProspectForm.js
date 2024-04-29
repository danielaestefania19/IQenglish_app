
import axios from "axios";


const baseUrlForm = 'http://localhost:3001/api/prospects/create';
export default async  function createProspectForm({ name, lastname, email, phone_number, age, address }) {
    try {

        const response = await axios.post(baseUrlForm, {
            name,
            lastname,
            email,
            phone_number,
            age,
            address
        },);

        if (response.status !== 200) {
            throw new Error('Response is NOT ok');
        }

        console.log(response.data)
        return response.data;


    } catch (error) {
        throw error;
    }
}
