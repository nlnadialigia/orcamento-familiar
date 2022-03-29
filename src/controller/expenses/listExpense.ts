import Expense from '../../models/expenses.model';

async function listAllExpensesQuery() {
  const expenses = await Expense.find({}, '-__v');

  return {expenses};
}

async function listExpensesQuery(title: string) {
  const expenses = await Expense.find({title: title}, '-__v');

  return {expenses};
}

export {listAllExpensesQuery, listExpensesQuery};

