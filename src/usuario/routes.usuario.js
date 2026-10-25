// página de routes cadastro e login do schema: Usuario verificada

import { Router } from "express";
import { Controller_cadastro_usuario, Controller_login_usuario } from "./controller.usuario.js";

const router_usuario = Router()

router_usuario.post('/usuario/cadastro', Controller_cadastro_usuario)
router_usuario.post('/usuario/login', Controller_login_usuario)

export default router_usuario