import 'dotenv/config';

const env = process.env;

const uri = `mongodb+srv://${env.DB_USER}:${env.DB_PASS}@budget.0bsaa.mongodb.net/budget-db?retryWrites=true&w=majority`;

export { uri };

