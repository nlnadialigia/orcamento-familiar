import Income from '../../models/incomes.model';
import {FilterDate} from '../../utils/filter.data';

async function findByIdQuery(id: string) {
  const income = await Income.findOne({_id: id});
  return {
    incomeId: income._id,
    title: income.title,
    value: income.value,
    date: income.date
  };
}

async function findByDateQuery(year: string, month: string) {
  const incomes = await FilterDate(Income, parseInt(year), parseInt(month));
  return {incomes};
}

export {findByIdQuery, findByDateQuery};

