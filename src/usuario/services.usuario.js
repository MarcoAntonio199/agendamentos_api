// pagina de service cadastro e login do schema: Usuario verificada

import {prisma} from '../../lib/prisma'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import CustomError from '../utils/class_error.js'

const SECRET = process.env.JWT_SECRET

// dar npx prisma migrate reset e npx prisma migrate dev --name e npx prisma generate
export async function cadastro_usuario(nome,sobrenome,email,senha){

    if(!nome || !sobrenome || !email || !senha){
            throw new CustomError('Todos os campo devem ser preechidos', 401)
        }

    if(senha.length <10){
            throw new CustomError('A senha deve ter pelo menos 10 caracteres', 401)
        }

    const email_existente = await prisma.usuario.findUnique({
            where:{
                email:email
            }
        })
    
        if(email_existente){
            throw new CustomError('Email inserido já usado no cadastro', 409)
        }

    const senha_hash = await bcryptjs.hash(senha, 10)

    const cadastro = await prisma.usuario.create({data:{nome:nome, sobrenome:sobrenome, email:email, senha:senha_hash}})
    
    const print = {
        nome: nome,
        sobrenome: sobrenome,
        email: email
    }

    return print
}

export async function login_usuario(email,senha){

    const usuario = await prisma.usuario.findUnique({
        where:{
            email:email
        }
    })

    if(!usuario){
        throw new CustomError('Email ou senha inválidos', 401)
    }

    const verificar_senha = await bcryptjs.compare(senha, usuario.senha)

    if(!verificar_senha){
        throw new CustomError('Email ou senha inválidos', 401)
    }

    const payload = {
        id: usuario.id,
        role: 'USUARIO'
    }
    const token = await jwt.sign(
        payload,
        SECRET,
        {expiresIn: '1h'}
    )

    return token

}