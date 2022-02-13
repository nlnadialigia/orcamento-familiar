import { Router } from 'express';
import { router as IncomesRoutes } from './incomes.routes';

const router = Router();

router.use('/incomes', IncomesRoutes);

export { router };

