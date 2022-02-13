import { Router } from 'express';

const router = Router();

router.get('/incomes', (req, res) => {
  res.send('Rota GET das receitas');
});

export { router };

