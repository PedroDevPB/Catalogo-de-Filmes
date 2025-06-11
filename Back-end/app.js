const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());


app.use(express.json());

const filmesRouter = require('./routes/filmes');

app.use('/filmes', filmesRouter);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});