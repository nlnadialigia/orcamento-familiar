import {Router} from 'express';
import {
  createExpense,
  deleteAllExpenses,
  deleteExpenseById,
  findExpenseById,
  findExpenseByMonth,
  getExpensesList,
  updateExpenseById
} from './expenses.services';

const router = Router();

router.post('/', createExpense);
router.get('/', getExpensesList);
router.get('/:id', findExpenseById);
router.put('/:id', updateExpenseById);
router.delete('/:id', deleteExpenseById);
router.delete('/', deleteAllExpenses);
router.get('/:year/:month', findExpenseByMonth);

export {router};

