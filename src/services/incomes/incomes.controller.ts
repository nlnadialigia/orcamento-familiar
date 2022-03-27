import {Router} from 'express';
import {
  createIncome,
  deleteAll,
  deleteIncomeById,
  findIncomeById,
  findIncomeByMonth,
  getIncomesList,
  updateIncomeById
} from './incomes.utils';

const router = Router();

router.post('/', createIncome);
router.get('/', getIncomesList);
router.get('/:id', findIncomeById);
router.put('/:id', updateIncomeById);
router.get('/:year/:month', findIncomeByMonth);
router.delete('/:id', deleteIncomeById);
router.delete('/', deleteAll);

export {router};

