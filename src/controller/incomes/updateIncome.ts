/* eslint-disable indent */
import Income from '../../models/incomes.model';

async function updateIncomeQuery(id: string, title?: string, value?: string, date?: string) {
  const income = await Income.findOneAndUpdate(
    {_id: id},
    {title, value, date},
    {new: true, upsert: true}
  );

  return {
    incomeId: income._id,
    title: income.title,
    value: income.value,
    date: income.date
  };
}

export {updateIncomeQuery};
