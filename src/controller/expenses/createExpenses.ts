import Expense from '../../models/expenses.model';

async function createExpenseQuery(title: string, value: number, date: Date, category: string) {
  const expense = new Expense({
    title,
    value,
    date,
    category
  });

  await expense.save();

  return {
    expenseId: expense._id,
    title: expense.title,
    value: expense.value,
    date: expense.date
  };
}

export {createExpenseQuery};
