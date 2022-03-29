import Expense from '../../models/expenses.model';

/* eslint-disable indent */
async function updateExpense(
  id: string,
  title?: string,
  value?: string,
  date?: string,
  category?: string) {
  const expense = await Expense.findOneAndUpdate(
    {_id: id},
    {title, value, date, category},
    {new: true, upsert: true}
  );
  return {
    expenseId: expense._id,
    title: expense.title,
    value: expense.value,
    date: expense.date,
    category: expense.category,
  };
}

export {updateExpense};
