/* eslint-disable indent */
import { Month, Year } from '.';

async function FindDuplicatedField(
  date: moment.MomentInput, title: string, model: any
): Promise<string> {
  let response = 'Not found';
  const data = await model.find({
    title: title,
  });

  if (data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      const element = data[i].date;
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
