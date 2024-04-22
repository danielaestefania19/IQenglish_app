import axios from "axios";

const baseUrl = 'http://localhost:3001/api/prospects';


// const baseUrlForm = 'http://localhost:3001/api/prospects/create';
export default async function createProspect({ name, lastname, email, phone_number, age, address }) {
    console.log(name, lastname, email, phone_number, age, address); // Verifica que 'address' esté recibiendo el valor esperado
    try {
        const response = await axios.post(baseUrl, {
            name,
            lastname,
            email,
            phone_number,
            age,
            address // Cambiado de 'addresses' a 'address'
        });

        if (response.status !== 200) {
            throw new Error('Response is NOT ok');
        }

        return response.data;
    } catch (error) {
        throw error;
    }
}



// export default async function createProspectForm({ name, lastname, email, phone_number, age, addresses}) {
//     try {

//         const response = await axios.post(baseUrlForm, {
//             name,
//             lastname,
//             email,
//             phone_number,
//             age,
//             addresses
//         }, );

//         if (response.status !== 200) {
//             throw new Error('Response is NOT ok');
//         }

//         return response.data;

//     } catch (error) {
//         throw error;
//     }
// }
