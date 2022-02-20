import { Month, Year } from '.';

async function FilterDate(model: any, year: number, month: number) {
  const data = await model.find({});
  const newData = [];

  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const elementMonth = Month(element.date);
    const elementYear = Year(element.date);
    if (elementMonth === month && elementYear === year) {
      newData.push(element);
    }
  }

  return newData;
}

export { FilterDate };

