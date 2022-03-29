import Expense from '../../models/expenses.model';
import {FindDuplicatedField} from '../../utils';

const categoryTypes = [
  'Alimentação',
  'Saúde',
  'Moradia',
  'Transporte',
  'Educação',
  'Lazer',
  'Imprevistos',
  'Outras'
];

async function searchExpense(title: string, date: Date) {
  const search = await FindDuplicatedField(date, title, Expense);

  return search;
}

function verifyCategory(category: string) {
  let message = true;
  if (!categoryTypes.includes(category)) {
    message = false;
  }

  return message;
}

export {categoryTypes, searchExpense, verifyCategory};

