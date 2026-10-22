import express from 'express'
import 'dotenv/config'
import router_horarios from './src/modules/bookings.profissional/bookings.route.js'
import router_profissional from './src/profissional/routes.profissional.js'
import router_usuario from './src/usuario/routes.usuario.js'

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(router_usuario)
app.use(router_horarios)

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
