import app from './app.js'
import { initializeAdmin } from './init.js'


// Inicializar el usuario administrador
if (process.env.NODE_ENV !== 'test') {
    initializeAdmin();
}

const PORT = process.env.PORT || 3001
const server = app.listen(PORT, () => {
    console.log("Server running on port 3001");
});

export { app, server };
