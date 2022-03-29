import {Request, Response} from 'express';
import {resumeQuery} from '../../controller/resume';
import {TotalData} from '../../utils';
import {ExpensesByCategory} from './resume.utils';

async function resumeByMonth(req: Request, res: Response) {
  const {year, month} = req.params;
  const filters = await resumeQuery(parseInt(year), parseInt(month));
  const incomes = filters.incomes;
  const expenses = filters.expenses;

  const totalIncomes = await TotalData(incomes);
  const totalExpenses = await TotalData(expenses);
  const balance = totalIncomes - totalExpenses;
  const totalByCategory = await ExpensesByCategory(expenses);

  const resume = {
    'Total das receitas': totalIncomes,
    'Total das despesas': totalExpenses,
    'Sado Final': balance,
    'Total de gastos por categorias': totalByCategory
  };

  res.json(resume);
}

export {resumeByMonth};

