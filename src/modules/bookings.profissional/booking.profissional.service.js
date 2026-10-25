// pagina de bookings do schema: Profissional verificada

import {prisma} from '../../../lib/prisma.js'
import CustomError from '../../utils/class_error.js'

export async function criar_horario(servico, data, horario, local, id_do_profisisonal){

    if(!servico || !data || !horario || !local){
        throw new CustomError('Todos os campos devem ser preenchidos', 401)
    }

    if(!id_do_profisisonal){
        throw new CustomError('O login deve ser efetuado')
    }

    await prisma.horarios.create({data:{ servico: servico, data: new Date(data), horario: horario, local:local, profissionalId: id_do_profisisonal }})

     const print = {
        mensagem: 'Registro concluido',
        serviço: servico,
        horário: horario,
        data: data
    }

    return print
}