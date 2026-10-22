import {prisma} from '../../../lib/prisma.js'

export async function criarHorários(servico, data, horario, local, id_do_profisisonal){
    const booking = await prisma.horarios.create({data:{ servico: servico, data: new Date(data), horario: horario, local:local, profissionalId: id_do_profisisonal }})
     const reg = {
        mensagem: 'Registro concluido',
        serviço: servico,
        horário: horario,
        data: data
    }

    return reg
}