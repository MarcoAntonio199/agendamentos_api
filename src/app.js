import express from 'express'
import router_profissional from './profissional/routes.profissional.js'
import router_usuario from './usuario/routes.usuario.js'
import router_horarios from './modules/bookings.profissional/booking.profissional.route.js'
import router_bookings_usuario from './modules/bookings.usuario/booking.usuario.routes.js'
import middleware_ERROR from './utils/middleware_error.js'

const app = express()

app.use(express.json())
app.use(router_profissional)
app.use(router_usuario)
app.use(router_horarios)
app.use(router_bookings_usuario)
app.use(middleware_ERROR)

export default app