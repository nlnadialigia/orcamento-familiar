import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import { uri } from './config/database';
import { router } from './routes/index';

const port = process.env.APP_PORT;


const app = express();

app.use(express.json());
app.use(router);

mongoose.connect(uri).then(() => {
  console.log('MongoDB conectado');
  app.listen(process.env.port || port, () => {
    console.log(`Servidor em execução na port: ${port}`);
  });
}).catch((error) => console.log(error));
