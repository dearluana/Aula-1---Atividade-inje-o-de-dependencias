import express from 'express';
import livroRoutes from './routes/livroRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', livroRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
