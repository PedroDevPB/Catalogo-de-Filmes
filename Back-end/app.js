const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const filmesRouter = require('./routes/filmesRoutes');
const usersRoutes = require('./routes/usersRoutes');

app.use('/filmes', filmesRouter);
app.use('/usuarios', usersRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});