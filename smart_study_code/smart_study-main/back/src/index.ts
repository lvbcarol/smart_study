import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import usuarioRoutes from './routes/usuario.routes';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(' mongodb+srv://carol:12ZO2LVlrVXLWul6@cluster0.e6p1rlj.mongodb.net/smart-study?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('🟢 MongoDB conectado'))
  .catch((err) => console.error('🔴 Erro MongoDB:', err));

app.use('/usuario', usuarioRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
