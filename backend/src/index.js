const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rotas / recursos
 * exemplo: /user é yma rota/recurso
 */

 /**
  * Métodos HTTP
  * 
  * nome         função
  * GET          Buscar ou listar uma informação do backend
  * POST         Criar uma informação no backend
  * PUT          Alterar uma informação no backend
  * DELETE       Deltear uma informação no backend
  */

  /**
   * Tipos de parâmetros
   * 
   * Query Parms: Parâmetros nomeados enviados após "?", com a função de filtrar, paginar
   * Route Params: Parâmetros usados para identificar recursos
   * Request Body: Corpo da requuisição, ultilizado para criar ou alterar recursos
   *
   */

   /**
    * Tipos de bancos de dados
    * 
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server. sql da mais controle sobre o banco de dados e tem uma melhor estrutura(é mais profissional)
    * NoSQL: MongoDB, CouchDB, 
    */

    /**
     * DRIVER: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     * 
     */


app.listen(3333);