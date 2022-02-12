import express from 'express';

const app = express();
app.use(express.json());

const port = 5000;

app.listen(process.env.port || port, () => {
  console.log(`Servidor em execução na port: ${port}`);
});
