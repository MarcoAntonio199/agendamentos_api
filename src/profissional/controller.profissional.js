import { login_profissional, cadastro_profissional } from "./services.profissional.js";

export async function Controller_cadastro_profissional(req,res){
    const {nome, email, senha, profissao, sobrenome} = req.body

    try {
        const cadastro = await cadastro_profissional(nome, sobrenome, email, senha, profissao)
        return res.status(200).json(cadastro)
    } catch (error) {
        return console.error(error)
    }

}

export async function Controller_login_profissional(req,res){

    const {email, senha} = req.body

    try {
        const login = await login_profissional(email, senha)
        return res.status(200).json({
            token: login
        })
    } catch (error) {
        return console.error(error)
    }

}
