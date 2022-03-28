import 'dotenv/config';
import express from 'express';
import './config';
import {router} from './routes/index';


const port = process.env.APP_PORT;

const app = express();

app.use(express.json());
app.use(router);

app.listen(3080 || port, () => {
  console.log(`Servidor em execução na port: ${port}`);
});
