import {prisma} from '../../lib/prisma'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import  'dotenv/config'

const SECRET = process.env.JWT_SECRET

// dar npx prisma migrate reset e npx prisma migrate dev --name e npx prisma generate
export async function cadastro_usuario(nome,sobrenome,email,senha){

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
        return console.log('Email ou senha inválidos')
    }

    const verificar_senha = await bcryptjs.compare(senha, usuario.senha)

    if(!autenticacao){
        return console.log('Email ou senha inválidos')
    }

    const payload = {
        id: usuario.id
    }
    const token = await jwt.sign(
        payload,
        SECRET,
        {expiresIn: '1h'}
    )

    return token

}