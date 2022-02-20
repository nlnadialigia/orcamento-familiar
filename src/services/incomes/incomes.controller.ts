import { Router } from 'express';
import {
  createIncome,
  deleteAll,
  deleteIncomeById,
  findIncomeById,
  getIncomesList,
  updateIncomeById
} from './incomes.utils';

const router = Router();

router.get('/', getIncomesList);
router.get('/:id', findIncomeById);
router.post('/', createIncome);
router.put('/:id', updateIncomeById);
router.delete('/:id', deleteIncomeById);
router.delete('/', deleteAll);

export { router };
