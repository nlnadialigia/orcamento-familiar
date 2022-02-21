import { Request, Response } from 'express';
import Expense from '../../models/expenses.model';
import Income from '../../models/incomes.model';
import { TotalData } from '../../utils';
import { FilterDate } from '../../utils/filter.data';

async function resumeByMonth(req: Request, res: Response) {
  const { year, month } = req.params;
  const incomes = await FilterDate(Income, parseInt(year), parseInt(month));
  const expenses = await FilterDate(Expense, parseInt(year), parseInt(month));

  const totalIncomes = await TotalData(incomes);
  const totalExpenses = await TotalData(expenses);
  const balance = totalIncomes - totalExpenses;

  const resume = {
    'Total das receitas': totalIncomes,
    'Total das despesas': totalExpenses,
    'Sado Final': balance,
    'Total de gastos por categorias': {}
  };

  res.json(resume);
}

export { resumeByMonth };
