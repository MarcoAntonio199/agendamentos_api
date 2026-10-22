import { criarHorários } from "./bookings.service.js"

export async function Controller_CriarHorario(req,res){
    const {servico, data, horario, local} = req.body
    const {id:id_do_profissional} = req.profissional

    if(!servico || !data || !horario){
        return console.log('Os campo para criação de horário não estão completamente preenchidos')
    }

    try {
        const registro = await criarHorários(servico, data, horario, local, id_do_profissional)

        return res.status(200).json({
            registro: registro
        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            mensagem: 'Erro ao registrar horário'
        })
    }

}