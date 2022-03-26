import { categoryTypes } from '../expenses/categories.type';

const types = categoryTypes;
console.log(`Types: ${types}`);

async function ExpensesByCategory(data: any): Promise<any> {
  for (let i = 0; i < types.length; i++) {
    const type = types[i];
    console.log(`type: ${type}`);

    let total = 0;
    for (let j = 0; j < data.length; j++) {
      const element = data[j];
      console.log(`element: ${element}`);
      if (element.category === type) {
        total += element.value;
      }
      console.log(`total: ${total}`);
    }
    return `${type}: ${total}`;
  }
}

export { ExpensesByCategory };
