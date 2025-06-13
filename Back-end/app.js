const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const filmesRouter = require('./routes/filmesRoutes');
const usersRoutes = require('./routes/usersRoutes');
const { swaggerUi, swaggerSpec } = require('./swagger');

app.use('/filmes', filmesRouter);
app.use('/usuarios', usersRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});