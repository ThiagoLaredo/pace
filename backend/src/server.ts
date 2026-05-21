import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import servicesRoutes from './routes/services';

dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'Servidor Clínica Pace funcionando!' });
});

app.use('/api/services', servicesRoutes);

app.listen(port, () => {
  console.log(`🔥 Backend Clínica Pace rodando em http://localhost:${port}`);
});
