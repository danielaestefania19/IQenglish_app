import supertest from "supertest"
import {server, app} from "../index.js"
import dotenv from 'dotenv'
import { initializeAdmin } from '../init.js'
import { pool } from "../db.js"
import {DeleteAll} from "../controllers/advisors.controller.js"
const {ADMIN_USERNAME, ADMIN_PASSWORD} = process.env
console.log(ADMIN_PASSWORD)
dotenv.config()

const api = supertest(app);

let tokenAdmin;
let tokenAdvisor;


let advisorCredentials;

beforeAll(async () => {
    await initializeAdmin();

    // Eliminar todos los usuarios
    await DeleteAll()

});

test('Admin login', async () => {
    const response = await api
        .post('/api/advisors/admin/login')
        .send({
            username: ADMIN_USERNAME,
            password: ADMIN_PASSWORD
        })
        .expect(200)
        tokenAdmin = response.body.token; // Guardar el token para su uso en pruebas posteriores
});

test('A new Admin is successfully registered', async () => {
    const timestamp = Date.now();
    const newUser = {
        username: 'newadmin' + timestamp, // Añadir el timestamp al nombre de usuario
        password: 'password',
        userType: 'admin'
    };

    await api
        .post('/api/advisors/admin/register')
        .set('Authorization', `Bearer ${tokenAdmin}`) // Usar el token para autenticar la solicitud
        .send(newUser)
        .expect(200)
});


test('A new Advisor is successfully registered', async () => {
    const timestamp = Date.now();
    advisorCredentials = {
        username: 'newadvisor' + timestamp, // Añadir el timestamp al nombre de usuario
        password: 'password',
    };
    const newUser = {
        ...advisorCredentials,
        userType: 'advisor'
    };

    await api
        .post('/api/advisors/admin/register')
        .set('Authorization', `Bearer ${tokenAdmin}`) // Usar el token para autenticar la solicitud
        .send(newUser)
        .expect(200)
});

test('Get all advisors', async () => {
    const response = await api
        .get('/api/advisors')
        .set('Authorization', `Bearer ${tokenAdmin}`) // Usar el token para autenticar la solicitud
        .expect(200)

    expect(response.body.length).toBe(3); // Verificar que la cantidad de asesores sea 3
});

test('Advisor login', async () => {
    const response = await api
        .post('/api/advisors/login')
        .send(advisorCredentials)
        .expect(200)
        tokenAdvisor = response.body.token; // Guardar el token para su uso en pruebas posteriores
});




afterAll(() => {
    server.close()
    pool.end()
})