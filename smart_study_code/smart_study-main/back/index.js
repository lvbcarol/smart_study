//mongodb+srv://24004308:0TheFlash1@cluster0.ukgdnyc.mongodb.net/admin
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import usuarioRoutes from './routes/usuario.routes';

const app = express();
app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://24004308:0TheFlash1@cluster0.ukgdnyc.mongodb.net/admin';
mongoose.connect(uri)
  .then(() => console.log('🟢 MongoDB conectado'))
  .catch(err => console.error('🔴 Erro MongoDB:', err));

app.use('/usuario', usuarioRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
