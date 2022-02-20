import { Router } from 'express';
import { resumeByMonth } from './resume.utils';

const router = Router();

router.get('/', (req, res) => {
  res.status(405).send('Não é possível acessar o path root.');
});

router.get('/:year/:month', resumeByMonth);

export { router };
