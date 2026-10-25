import 'dotenv/config'

export default function middleware_ERROR(error, req , res, next){
    error.statusCode = error.statusCode || 500;
    error.status = error.status || (error.statusCode >= 500 ? 'error':'fail')

    // ERRO POR PARTE DO SERVIDOR
    if(process.env.NODE_ENV === 'production' && !error.isOperational){
        console.log('ERRO', error)
        
        return res.status(500).json({
            status: 'error',
            message: 'Algo deu errado no servidor'
        })
    }

    // ERRO POR PARTE DO CLIENTE
    res.status(error.statusCode).json({
        status_code: error.statusCode,
        status: error.status,
        message: error.message,
        ...(process.env.NODE_ENV === 'development' && {stack: error.stack})
    })

}