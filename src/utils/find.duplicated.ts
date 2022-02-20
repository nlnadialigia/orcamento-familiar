/* eslint-disable indent */
import { Month, Year } from '.';

async function FindDuplicatedField(
  date: moment.MomentInput, title: string, model: any
) {
  let response = 'Not found';
  const incomes = await model.find({
    title: title,
  });

  if (incomes.length > 0) {
    for (let i = 0; i < incomes.length; i++) {
      const element = incomes[i].date;
      const elementMonth = Month(element);
      const elementYear = Year(element);
      if (elementMonth === Month(date) && elementYear === Year(date)) {
        response = 'Duplicated';
      }
    }
  }

  return response;
}

export { FindDuplicatedField };
