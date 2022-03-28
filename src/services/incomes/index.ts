import {Router} from 'express';
import {
  createIncome,
  deleteAllIncomes,
  deleteIncomeById,
  findIncomeById,
  findIncomeByMonth,
  getIncomesList,
  updateIncomeById
} from './incomes.services';

const router = Router();

router.post('/', createIncome);
router.get('/', getIncomesList);
router.get('/:id', findIncomeById);
router.put('/:id', updateIncomeById);
router.delete('/:id', deleteIncomeById);
router.delete('/', deleteAllIncomes);
router.get('/:year/:month', findIncomeByMonth);

export {router};

