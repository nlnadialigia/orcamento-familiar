import Income from '../../models/incomes.model';

async function listIncomesQuery() {
  try {
    const incomes = await Income.find({}, '-__v');
    return {incomes};
  } catch (error) {
    return error;
  }
}

async function filterIncomesQuery(title: string) {
  try {
    const incomes = await Income.find({title: title}, '-__v');
    return {incomes};
  } catch (error) {
    return error;
  }
}

export {listIncomesQuery, filterIncomesQuery};
