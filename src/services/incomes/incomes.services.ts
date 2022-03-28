import {Router} from 'express';
import {
  deleteAll,
  deleteIncomeById,
  findIncomeById,
  findIncomeByMonth,
  getIncome,
  getIncomesList,
  updateIncomeById
} from './incomes.utils';

const router = Router();

router.post('/', getIncome);
router.get('/', getIncomesList);
router.get('/:id', findIncomeById);
router.put('/:id', updateIncomeById);
router.get('/:year/:month', findIncomeByMonth);
router.delete('/:id', deleteIncomeById);
router.delete('/', deleteAll);

export {router};

