import express from 'express'
import cors from 'cors'
import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
// GET: Buscar ou listar uma informação
// POST: Criar alguma informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso quero atualizar ou deletar
// Query Params: Paginação, Filtros, Ordenação

app.get('/', (req, res) => {
    return res.json({ message: 'Hello World'})
})

app.listen(3333)
