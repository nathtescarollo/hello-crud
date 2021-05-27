const express = require("express");
const app = express();
app.use(express.json());

const port = 3000;

const usuarioNathalia = {
    id: 1,
    nome: "nathalia",
    idade: 35
};

const usuarios = [usuarioNathalia];

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});