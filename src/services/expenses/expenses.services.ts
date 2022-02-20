import Expense from '../../models/expenses.model';
import { Month, Year } from '../../utils/custom.date';

async function FindExpenseMonth(date: moment.MomentInput, title: string) {
  let response = 'Not found';
  const expenses = await Expense.find({
    title: title,
  });

  if (expenses.length > 0) {
    for (let i = 0; i < expenses.length; i++) {
      const element = expenses[i].date;
      const elementMonth = Month(element);
      const elementYear = Year(element);
      if (elementMonth === Month(date) && elementYear === Year(date)) {
        response = 'Duplicated';
      }
    }
  }

  return response;
}

export { FindExpenseMonth };
