import {Router} from 'express';
import {router as expenses} from '../services/expenses/expenses.controller';
import {router as incomes} from '../services/incomes/incomes.services';
import {router as resume} from '../services/resume/resume.controller';

const router = Router();

router.use('/incomes', incomes);
router.use('/expenses', expenses);
router.use('/resume', resume);

export {router};

