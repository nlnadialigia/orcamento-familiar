import Income from '../../models/incomes.model';

async function listIncomesQuery() {
  try {
    const incomes = await Income.find({}, '-__v');
    if (incomes.length === 0) {
      return ({MESSAGE: 'Nenhum registro encontrado.'});
    } else {
      return {incomes};
    }
  } catch (error) {
    return error;
  }
}

async function filterIncomesQuery(title: string) {
  try {
    const incomes = await Income.find({title: title}, '-__v');

    if (incomes.length === 0) {
      return ({MESSAGE: 'Nenhum registro encontrado.'});
    } else {
      return {incomes};
    }
  } catch (error) {
    return error;
  }
}

export {listIncomesQuery, filterIncomesQuery};
