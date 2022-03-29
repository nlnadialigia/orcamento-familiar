import Expense from '../../models/expenses.model';
import {FilterDate} from '../../utils/filter.data';

async function findById(id: string) {
  const expense = await Expense.findOne({_id: id}, '-__v');

  return expense;
}

async function findByYearMonth(year: any, month: any) {
  const expenses = await FilterDate(Expense, parseInt(year), parseInt(month));

  return expenses;
}

export {findById, findByYearMonth};
