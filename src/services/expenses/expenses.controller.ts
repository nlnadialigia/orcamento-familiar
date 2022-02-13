import { Router } from 'express';
import {
  createExpense,
  deleteExpenseById,
  findExpenseById,
  getExpensesList,
  updateExpenseById
} from './expenses.utils';

const router = Router();

router.get('/', getExpensesList);
router.get('/:id', findExpenseById);
router.post('/', createExpense);
router.put('/:id', updateExpenseById);
router.delete('/:id', deleteExpenseById);

export { router };
