import Income from '../../models/incomes.model';

async function deleteIncomeQuery(id: string) {
  await Income.findByIdAndDelete({_id: id});
  return ({
    MESSAGE: 'Receita removida com sucesso!'
  });
}

async function deleteAllIncomesQuery() {
  await Income.deleteMany({});
  return ({
    MESSAGE: 'Todas as receitas foram removidas!'
  });
}

export {deleteIncomeQuery, deleteAllIncomesQuery};
