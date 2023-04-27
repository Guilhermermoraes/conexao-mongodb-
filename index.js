// Importando as dependências do Express e do Mongoose
const express = require("express");
const mongoose = require("mongoose");

// Adicionando a linha abaixo para suprimir o aviso de depreciação
mongoose.set('strictQuery', false);

// Importando as rotas definidas em um arquivo externo
const routes = require("../Site Fresh Fresh/routes");

// Estabelecendo a conexão com o banco de dados MongoDB
mongoose.connect("mongodb+srv://guigamoraesmaciel:020219Vg@guigamoraes.4gwqhml.mongodb.net/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Capturando eventos da conexão com o banco de dados
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to the database!"));

// Criando uma instância do aplicativo Express
const app = express();

// Definindo um middleware básico de log
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Adicionando as rotas ao aplicativo Express
app.use(routes);

// Definindo a porta em que o servidor irá escutar as requisições HTTP
const port = 3333;

// Iniciando o servidor na porta definida
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
