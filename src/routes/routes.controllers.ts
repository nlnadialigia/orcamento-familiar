import { Router } from 'express';
import { router as incomes } from '../services/incomes/incomes.controller';

const router = Router();

router.use('/incomes', incomes);

export { router };
