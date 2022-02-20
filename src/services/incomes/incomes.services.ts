import Income from '../../models/incomes.model';
import { Month, Year } from '../../utils/custom.date';

async function FindIncomeMonth(date: moment.MomentInput, title: string) {
  let response = 'Not found';
  const incomes = await Income.find({
    title: title,
  });

  if (incomes.length > 0) {
    for (let i = 0; i < incomes.length; i++) {
      const element = incomes[i].date;
      const elementMonth = Month(element);
      console.log(`ElementMonth: ${elementMonth}`);

      const elementYear = Year(element);
      console.log(`ElementYear: ${elementYear}`);
      if (elementMonth === Month(date) && elementYear === Year(date)) {
        response = 'Duplicated';
      }
    }
  }

  return response;
}

export { FindIncomeMonth };
