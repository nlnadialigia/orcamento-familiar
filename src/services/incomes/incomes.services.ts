import Income from '../../models/incomes.model';
import { FindMonth } from '../../utils/find.month';

async function FindIncomeMonth(date: moment.MomentInput, title: string) {
  let response = 'Not found';
  const incomes = await Income.find({
    title: title,
  });

  if (incomes.length > 0) {
    for (let i = 0; i < incomes.length; i++) {
      const element = incomes[i];
      const month = FindMonth(element.date);
      if (month === FindMonth(date)) {
        response = 'Duplicated';
      }
    }
  }

  return response;
}

export { FindIncomeMonth };
