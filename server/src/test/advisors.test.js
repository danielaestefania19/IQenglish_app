import supertest from "supertest"
import {server, app} from "../index.js"
import dotenv from 'dotenv'
import { initializeAdmin } from '../init.js'
import { pool } from "../db.js"
import {DeleteAll} from "../controllers/advisors.controller.js"
const {ADMIN_USERNAME, ADMIN_PASSWORD} = process.env
dotenv.config()

const api = supertest(app);

let tokenAdmin;
let tokenAdvisor;


let advisorCredentials;
let adminCredentials;

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


test('Login admin fails with incorrect credentials', async () => {
    const incorrectCredentials = {
        username: 'incorrectUsername',
        password: 'incorrectPassword',
    };

    await api
        .post('/api/advisors/admin/login')
        .send(incorrectCredentials)
        .expect(400) // Esperar un código de estado 401 (No autorizado)
});



test('A new Admin is successfully registered', async () => {
    const timestamp = Date.now();
    adminCredentials = {
        username: 'newadmin' + timestamp, // Añadir el timestamp al nombre de usuario
        password: 'password',
    };
    const newUser = {
        ...adminCredentials,
        userType: 'admin'
    };

    const response = await api
        .post('/api/advisors/admin/register')
        .set('Authorization', `Bearer ${tokenAdmin}`) // Usar el token para autenticar la solicitud
        .send(newUser)
        .expect(200)

    adminCredentials.id = response.body.id; // Guardar el ID del administrador
});

test('A new administrator has failed to register without complete credentials.', async () => {
    const timestamp = Date.now();
    const incompleteAdminCredentials = {
        username: 'newadmin' + timestamp, // Añadir el timestamp al nombre de usuario
    };
    const newUser = {
        ...incompleteAdminCredentials,
        userType: 'admin'
    };

    await api
        .post('/api/advisors/admin/register')
        .set('Authorization', `Bearer ${tokenAdmin}`) // Usar el token para autenticar la solicitud
        .send(newUser)
        .expect(400)
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

    const response = await api
        .post('/api/advisors/admin/register')
        .set('Authorization', `Bearer ${tokenAdmin}`) // Usar el token para autenticar la solicitud
        .send(newUser)
        .expect(200)

    advisorCredentials.id = response.body.id; // Guardar el ID del asesor
});



test('A new advisor has failed to register without complete credentials.', async () => {
    const timestamp = Date.now();
    const incompleteAdvisorCredentials = {
        username: 'newadvisor' + timestamp, // Añadir el timestamp al nombre de usuario
    };
    const newUser = {
        ...incompleteAdvisorCredentials,
        userType: 'advisor'
    };

    await api
        .post('/api/advisors/admin/register')
        .set('Authorization', `Bearer ${tokenAdmin}`) // Usar el token para autenticar la solicitud
        .send(newUser)
        .expect(400)
});


test('Get all advisors', async () => {
    const response = await api
        .get('/api/advisors')
        .set('Authorization', `Bearer ${tokenAdmin}`) // Usar el token para autenticar la solicitud
        .expect(200)
        .expect('Content-Type', /application\/json/)
      
    expect(response.body.length).toBe(3); // Verificar que la cantidad de asesores sea 3
    expect(response.body[1].username).toBe(adminCredentials.username); // Verificar que el nombre de usuario del segundo asesor sea correcto
    expect(response.body[2].username).toBe(advisorCredentials.username); // Verificar que el nombre de usuario del tercer asesor sea correcto
});


test('Advisor login', async () => {
    const response = await api
        .post('/api/advisors/login')
        .send(advisorCredentials)
        .expect(200)
        tokenAdvisor = response.body.token; // Guardar el token para su uso en pruebas posteriores
});

test('Login advisors fails with incorrect credentials', async () => {
    const incorrectCredentials = {
        username: 'incorrectUsername',
        password: 'incorrectPassword',
    };

    await api
        .post('/api/advisors/login')
        .send(incorrectCredentials)
        .expect(400) // Esperar un código de estado 401 (No autorizado)
});

test('Advisor fails to login as admin', async () => {
    await api
        .post('/api/advisors/admin/login')
        .send(advisorCredentials) // Usar las credenciales del asesor
        .expect(403) // Esperar un código de estado 403 (Prohibido)
});

test('Update advisor', async () => {
    const updatedCredentials = {
        username: "updateadvisor", // Usar el mismo nombre de usuario
        password: 'updatepassword', // Cambiar la contraseña
    };
    await api
        .patch(`/api/advisors/${advisorCredentials.id}`) // Usar el ID del asesor
        .set('Authorization', `Bearer ${tokenAdmin}`) // Usar el token para autenticar la solicitud
        .send(updatedCredentials)
        .expect(200)
});

test('Advisor can login with new credentials', async () => {
    const updatedCredentials = {
        username: "updateadvisor", // Usar el mismo nombre de usuario
        password: "updatepassword", // Usar la nueva contraseña
    };

    await api
        .post('/api/advisors/login')
        .send(updatedCredentials)
        .expect(200)
});

test('Delete advisor', async () => {
    await api
        .delete(`/api/advisors/${advisorCredentials.id}`) // Usar el ID del asesor
        .set('Authorization', `Bearer ${tokenAdmin}`) // Usar el token para autenticar la solicitud
        .expect(204)
});


test('Deleted advisor cannot login', async () => {
    await api
        .post('/api/advisors/login')
        .send(advisorCredentials)
        .expect(400) // Esperar un código de estado 400 (Solicitud incorrecta)
});

afterAll(() => {
    server.close()
    pool.end()
})