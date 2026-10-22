// jwt -> modos de salvar o token gerado : memória, local storage, cookies

//Mais para frente colocar um sistema melhor de jwt: melhor estratégia é usar o cookie que é passado a cada requisição

import jwt from 'jsonwebtoken'
import 'dotenv/config'

const SECRET = process.env.JWT_SECRET

export function verifyJwtUsuario(req,res,next){
    const authHeader = req.headers.authorization

    if(!authHeader){
        return res.status(400).json({mensagem: 'Token não informado'})
    }

    const token = authHeader.split(' ')[1]

    try {
        const payload = jwt.verify(token, SECRET)
        req.usuario = payload
        next()
    } catch (error) {
        console.error(error)
        return res.status(400).json({mensagem: 'Token inválido ou expirado'})
    }
}