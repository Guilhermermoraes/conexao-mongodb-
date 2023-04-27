const express = require("express");
const router = express.Router();

// Definindo uma rota GET
router.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Definindo uma rota POST
router.post("/users", (req, res) => {
  const { name, email } = req.body;
  // Código para adicionar usuário ao banco de dados
  res.send(`User ${name} created with email ${email}`);
});

module.exports = router;
