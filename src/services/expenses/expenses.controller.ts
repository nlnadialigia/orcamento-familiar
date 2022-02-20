import { Router } from 'express';
import {
  createExpense,
  deleteAllExpenses,
  deleteExpenseById,
  findExpenseById,
  findExpenseByMonth,
  getExpensesList,
  updateExpenseById
} from './expenses.utils';

const router = Router();

router.get('/', getExpensesList);
router.get('/:id', findExpenseById);
router.get('/:year/:month', findExpenseByMonth);
router.post('/', createExpense);
router.put('/:id', updateExpenseById);
router.delete('/:id', deleteExpenseById);
router.delete('/', deleteAllExpenses);

export { router };
