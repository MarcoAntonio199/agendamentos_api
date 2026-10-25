// pagina de bookings do schema: Profissional verificada

import { Router } from "express";
import { Controller_criar_horario } from "./booking.profissional.controller.js";
import { verify_jwt_profissional } from "../../middlewares/autenticacao.profissional.login.js";
const router_horarios = Router()

router_horarios.post('/profissional/horario', verify_jwt_profissional, Controller_criar_horario)

export default router_horarios