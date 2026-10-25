import { busca_servicos } from "./booking.usuario.service";

export async function Controller_busca_servicos(req,res){


    const servicos = await busca_servicos()
    return res.status(200).json({
        mensagem: 'Lista de servicos',
        servicos: servicos
        })

    
}