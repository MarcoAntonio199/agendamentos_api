import {prisma} from '../../lib/prisma.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const SECRET = process.env.JWT_SECRET

export async function cadastro_profissional(nome,sobrenome,email,senha,profissao){

    const senha_hash = await bcrypt.hash(senha, 10)

    // o prisma transforma o nome da tabela em letra minuscula
    const profissional = await prisma.profissional.create({data:{nome: nome, sobrenome: sobrenome, email: email, senha: senha_hash, profissao: profissao}})

    return profissional
}

export async function login_profissional(email, senha){

    // o método findUnique deve receber argumentos unicos que sejam exclusivos de um resgistro como por exemplo: id, mas nesse caso o email deve receber o @unique
    const profissional = await prisma.profissional.findUnique({
        where:{
            email: email
        }
    })

    const validacao = await bcrypt.compare(senha, profissional.senha)

    if(!validacao){
        return console.log('Validação de email e senha falhou')
    }
    const payload = {
        id: profissional.id
    }
    const token = jwt.sign(
        payload,
        SECRET,
        {expiresIn: '1h'}
    )

    return token

}