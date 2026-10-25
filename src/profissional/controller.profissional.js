// pagina de controller cadastro e login do schema: Profissional verificada

import { login_profissional, cadastro_profissional } from "./services.profissional.js";

export async function Controller_cadastro_profissional(req,res){
    const {nome, email, senha, profissao, sobrenome} = req.body

    return res.status(200).json(await cadastro_profissional(nome, sobrenome, email, senha, profissao))
  
}

export async function Controller_login_profissional(req,res){

    const {email, senha} = req.body

    return res.json(await login_profissional(email, senha))

}
