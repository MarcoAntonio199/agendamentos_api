import { Router } from "express";
import { Controller_cadastro_profissional, Controller_login_profissional } from "./controller.profissional.js";

const router_profissional = Router()

router_profissional.post('/cadastro', Controller_cadastro_profissional)
router_profissional.post('/login', Controller_login_profissional)

export default router_profissional