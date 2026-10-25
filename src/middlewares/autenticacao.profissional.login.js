// jwt -> modos de salvar o token gerado : memória, local storage, cookies

//Mais para frente colocar um sistema melhor de jwt: melhor estratégia é usar o cookie que é passado a cada requisição

import jwt from 'jsonwebtoken'
import 'dotenv/config'
import CustomError from '../utils/class_error.js'

const SECRET = process.env.JWT_SECRET

export function verify_jwt_profissional(req,res,next){
    const authHeader = req.headers.authorization

    if(!authHeader){
        throw new CustomError('Token não informado', 401)
    }

    const token = authHeader.split(' ')[1]

    const payload = jwt.verify(token, SECRET)

        if(!payload){
            throw new CustomError('Token inválido ou expirado', 401)
        }

    req.profissional = payload
    next()

}