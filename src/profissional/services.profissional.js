// pagina de cadastro e login do schema: Profissional verificada

import {prisma} from '../../lib/prisma.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import CustomError from '../utils/class_error.js'

const SECRET = process.env.JWT_SECRET

export async function cadastro_profissional(nome,sobrenome,email,senha,profissao){

    if(!nome || !sobrenome || !email || !senha || !profissao){
        throw new CustomError('Todos os campo devem ser preechidos', 401)
    }

    if(senha.length <10){
        throw new CustomError('A senha deve ter pelo menos 10 caracteres', 401)
    }

    const email_existente = await prisma.profissional.findUnique({
        where:{
            email:email
        }
    })

    if(email_existente){
        throw new CustomError('Email inserido já usado no cadastro', 409)
    }

    const senha_hash = await bcrypt.hash(senha, 10)

    // o prisma transforma o nome da tabela em letra minuscula
    const profissional = await prisma.profissional.create({data:{nome: nome, sobrenome: sobrenome, email: email, senha: senha_hash, profissao: profissao}})

    const print = {
        id: profissional.id,
        nome: profissional.nome,
        sobrenome: profissional.sobrenome,
        email: profissional.email
    }

    return print
}

export async function login_profissional(email, senha){

    // o método findUnique deve receber argumentos unicos que sejam exclusivos de um resgistro como por exemplo: id, mas nesse caso o email deve receber o @unique
    const profissional = await prisma.profissional.findUnique({
        where:{
            email: email
        }
    })

    if(!profissional){
        throw new CustomError('Email ou senha inválidos', 401)
    }

    const validacao = await bcrypt.compare(senha, profissional.senha)

    if(!validacao){
        throw new CustomError('Email ou senha inválidos', 401)
    }
    const payload = {
        id: profissional.id,
        role: 'PROFISSIONAL'
    }
    const token = jwt.sign(
        payload,
        SECRET,
        {expiresIn: '1h'}
    )

    return token

}