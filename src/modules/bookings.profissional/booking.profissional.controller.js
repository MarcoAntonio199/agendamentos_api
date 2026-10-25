// pagina de bookings do schema: Profissional verificada

import { criar_horario } from "./booking.profissional.service.js"

export async function Controller_criar_horario(req,res){
    const {servico, data, horario, local} = req.body
    const {id:id_do_profissional} = req.profissional

    return res.status(200).json(await criar_horario(servico, data, horario, local, id_do_profissional))

}