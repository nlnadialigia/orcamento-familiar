import { Router } from 'express';
import * as routes from '../controllers/incomes.controller';

const router = Router();

router.get('/', routes.getIncomesList);
router.get('/:id', routes.findIncomeById);
router.post('/', routes.createIncome);
router.put('/:id', routes.updateIncomeById);
router.delete('/:id', routes.deleteIncomeById);

export { router };
