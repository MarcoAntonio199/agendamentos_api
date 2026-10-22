import {prisma} from '../../../lib/prisma'

export async function marcarConsulta(servico){
    const [busca] = await prisma.horarios.findUnique({
        where:{
            servico: servico
        }
    })
    
    for(let i; i = busca.length; i++) {
        console.log(busca[i])
    }

}

marcarConsulta('fucinha')