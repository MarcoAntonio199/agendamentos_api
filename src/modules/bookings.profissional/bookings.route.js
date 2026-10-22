import { Router } from "express";
import { Controller_CriarHorario } from "./bookings.controller.js";
import { verifyJwtProfissional } from "../../middlewares/autenticacao.profissional.login.js";
const router_horarios = Router()

router_horarios.post('/profissional/horario', verifyJwtProfissional, Controller_CriarHorario)

export default router_horarios