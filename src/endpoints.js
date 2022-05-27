import {semaforo, diaSemana, fatorial, sequenciaPar } from './services.js'
import {Router} from 'express'
import res from 'express/lib/response';


const server = Router();

server.get('/semaforo/:cor', (req, resp) => {
   try {
    const cor = req.params.cor
    const x = semaforo(cor)

    resp.send({
        msg: x
    })
   } catch (err) {
       resp.send({
           erro: err.message
       })
   }
})

server.get('/diaSemana', (req, resp) => {
    try {
    const dia = Number(req.query.dia)
    const x = diaSemana(dia)

    resp.send({
        nome: x
    })
    } catch (err) {
        resp.send({
            erro:err.message
        })
        
    }
    
})

server.post('/fatorial', (req, resp) => {
    try {
        const n = Number(req.query.n)
    const x = fatorial(n)

    resp.send({
        FAT: x
    })
    } catch (err) {
        resp.send({
            erro:err.message
        })
    }
})

server.post('/sequenciaPar', (req, resp) => {
   try {
    const n = req.body.limite
    const x = sequenciaPar(n)
    resp.send({
        limite: x
    })
   } catch (err) {
       resp.send({
           erro:err.message
       })
   }
})
export default server