import Income from '../../models/incomes.model';
import {FindDuplicatedField} from '../../utils';

async function searchIncome(title: string, date: Date) {
  const search = await FindDuplicatedField(date, title, Income);

  return search;
}

export {searchIncome};
