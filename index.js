const express = require("express");
const app = express();
const port = 3000;

// Endpoint para converter decimal para binário
app.get("/to-hex/:decimal", (req, res) => {
  const decimal = parseInt(req.params.decimal, 10);
  if (isNaN(decimal)) {
    return res.status(400).json({ error: "Invalid decimal number" });
  }
  const hex = decimal.toString(16).toUpperCase(); // Converte para hexadecimal e deixa maiúsculo
  res.json({ decimal, hex });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

