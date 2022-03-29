import {categoryTypes} from '../expenses/expenses.utils';

const types = categoryTypes;

async function ExpensesByCategory(data: any): Promise<any> {
  const result: any[] = [];
  for (let i = 0; i < types.length; i++) {
    const type = types[i];

    let total = 0;
    for (let j = 0; j < data.length; j++) {
      const element = data[j];
      if (element.category === type) {
        total += element.value;
      }
    }

    if (total !== 0) {
      const field = `${type}: ${total}`;
      result.push(field);
    }
  }
  return result;
}

export {ExpensesByCategory};

