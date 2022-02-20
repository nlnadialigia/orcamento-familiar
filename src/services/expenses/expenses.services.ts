import Expense from '../../models/expenses.model';
import { FindMonth } from '../../utils/find.month';

async function FindExpenseMonth(date: moment.MomentInput, title: string) {
  let response = 'Not found';
  const expenses = await Expense.find({
    title: title,
  });

  if (expenses.length > 0) {
    for (let i = 0; i < expenses.length; i++) {
      const element = expenses[i];
      const month = FindMonth(element.date);
      if (month === FindMonth(date)) {
        response = 'Duplicated';
      }
    }
  }

  return response;
}

export { FindExpenseMonth };
