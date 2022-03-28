import {Router} from 'express';
import {router as expenses} from '../services/expenses';
import {router as incomes} from '../services/incomes';
import {router as resume} from '../services/resume';

const router = Router();

router.use('/incomes', incomes);
router.use('/expenses', expenses);
router.use('/resume', resume);

export {router};

