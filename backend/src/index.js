const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()

// app.use(cors({
//   origin: 'http://meuapp.com'
// }))
// Produção

app.use(cors())
app.use(express.json())
app.use(routes)

/*
  Rota / Recurso
*/

/*
  Métodos HTTP:

  GET: Buscar uma informação do back-end
  POST: Criar uma informação no back-end
  PUT: Atualizar/Alterar uma informação no back-end
  DELETE: Deletar  uma informação no back-end
*/

/*
  Tipos de parâmetros:

  Query Params: Parâmetros nomeados enviados na rota após "?" (Filtos, Paginação)
  Route Params: Parâmetros utilizados para identificar recursos
  Request Body: O corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
  SQL: MySQl, SQLite, PostgresSQL, Oracle, Microsoft SQL Server
  NoSQL: MongoDB, CouchDB, ect
*/

/*
  Driver: SELECT * From users
  Query Builder: table('users').select('*').where()
*/




app.listen(3333)
