import express from 'express';
import { router } from './routes/index';

const app = express();

app.use(express.json());
app.use(router);

const port = 5000;

app.listen(process.env.port || port, () => {
  console.log(`Servidor em execução na port: ${port}`);
});
