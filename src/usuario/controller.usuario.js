import { cadastro_usuario, login_usuario } from "./services.usuario.js"

export async function Controller_cadastro_usuario(req,res) {
    const {nome, sobrenome, email, senha} = req.body

    try {
    const usuario = await cadastro_usuario(nome, sobrenome, email, senha)

    return res.status(200).json({
        mensagem: `Usuário ${nome} cadastrado`,
        usuario: usuario
    })   
    } catch (error) {
        console.error(error)
        return res.statu(400).json({
            mensagem: 'Erro ao cadastrar'
        })
    }

}

export async function Controller_login_usuario(req,res){
    const {email,senha} = req.body
    try {
    const login = await login_usuario(email,senha)
    return res.status(200).json({
        mensagem: 'Login efetuado',
        token: login
    })
    } catch (error) {
        console.error(error)
        return res.status(400).json({mensagem: 'Erro ao realizar login'})
    }

    
}