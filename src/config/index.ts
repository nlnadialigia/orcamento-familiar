import 'dotenv/config';
import mongoose from 'mongoose';

const uri = `${process.env.URI}`;

mongoose.connect(uri).then(() => {
  console.log('MongoDB conectado');
}).catch((error) => console.log(error));