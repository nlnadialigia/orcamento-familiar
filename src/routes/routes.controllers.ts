import { Router } from 'express';
import { router as expenses } from '../services/expenses/expenses.controller';
import { router as incomes } from '../services/incomes/incomes.controller';

const router = Router();

router.use('/incomes', incomes);
router.use('/expenses', expenses);

export { router };
