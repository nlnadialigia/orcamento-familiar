import { Month, Year } from '.';

async function FilterDate(model: any, year: number, month: number) {
  const incomes = await model.find({});
  const newData = [];

  for (let i = 0; i < incomes.length; i++) {
    const element = incomes[i];
    const elementMonth = Month(element.date);
    const elementYear = Year(element.date);
    if (elementMonth === month && elementYear === year) {
      newData.push(element);
    }
  }

  return newData;
}

export { FilterDate };

