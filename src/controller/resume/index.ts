import Expense from '../../models/expenses.model';
import Income from '../../models/incomes.model';
import {FilterDate} from '../../utils/filter.data';

async function resumeQuery(year: number, month: number) {
  const incomes = await FilterDate(Income, year, month);
  const expenses = await FilterDate(Expense, year, month);

  return {incomes, expenses};
}
export {resumeQuery};

