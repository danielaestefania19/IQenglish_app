import express from 'express'
import prospectsRoutes from './routes/prospects.routes.js'
import indexRoutes from './routes/index.routes.js'
import advisorwRoutes from './routes/advisors.routes.js'
import { initializeAdmin } from './init.js'
const app = express()

app.use(express.json())
app.use('/api', prospectsRoutes)
app.use('/api', advisorwRoutes)
app.use(indexRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
})
// Inicializar el usuario administrador
initializeAdmin().then(() => {
    app.listen(3000)
    console.log("Server running on port 3000")
})
