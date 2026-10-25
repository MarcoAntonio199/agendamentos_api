// página de controller cadastro e login do schema: Usuario verificada

import { cadastro_usuario, login_usuario } from "./services.usuario.js"

export async function Controller_cadastro_usuario(req,res) {
    const {nome, sobrenome, email, senha} = req.body

    return res.status(200).json(await cadastro_usuario(nome, sobrenome, email, senha))   
 
}

export async function Controller_login_usuario(req,res){
    const {email,senha} = req.body

    return res.status(200).json(await login_usuario(email,senha))
    
}