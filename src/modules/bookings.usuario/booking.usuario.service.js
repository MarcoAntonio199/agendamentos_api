import {prisma} from '../../../lib/prisma'
import CustomError from '../../utils/class_error.js'

export async function busca_servicos() {
    // 1. Busca todos os registros de uma vez só
    const todos_os_servicos = await prisma.horarios.findMany()
    const todos_os_profissionais = await prisma.profissional.findMany()

    // 2. Relaciona as duas tabelas criando o array de objetos
    const servicosRelacionados = todos_os_servicos.map(servico => {
        // Encontra o profissional que possui o mesmo ID salvo no serviço
        const profissional = todos_os_profissionais.find(p => p.id === servico.profissionalId)

        // Retorna o objeto formatado com todas as informações cruzadas
        return {
            profissionalId: servico.profissionalId,
            Servico: servico.servico,
            nomeProfissional: profissional ? profissional.nome : 'Profissional não encontrado',
            emailProfissional: profissional ? profissional.email : 'E-mail não encontrado'
        }
    })

    // 3. Retorna o array gerado
    return servicosRelacionados
}
