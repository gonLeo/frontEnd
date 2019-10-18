const express = require("express"); //Express é um framework para node
const cors = require('cors');
const mongoose = require("mongoose"); //mongoose é um ORM para BD não relacionais
const requireDir = require("require-dir"); // Faz a atualização dos diretórios
//INICIANDO O APP
const app = express();
app.use(express.json());
app.use(cors());

//INICIANDO O DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true
});

//INICIA O REQUIRE DO PRODUTO
requireDir("./src/models");


//Rotas
app.use('/api',require("./src/routes")); //App use aceita todas as requisições

//Indica a porta para o servidor local
app.listen(3001);