import { Controller_busca_servicos } from "./booking.usuario.controller.js";
import { Router } from "express";

const router_bookings_usuario = Router()

router_bookings_usuario.get('/busca', Controller_busca_servicos)

export default router_bookings_usuario