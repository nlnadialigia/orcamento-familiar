import Expense from '../../models/expenses.model';

async function deleteById(id: string) {
  await Expense.findOneAndDelete({_id: id});

  return {MESSAGE: 'Despesa deletada com sucesso!'};
}

async function deleteAll() {
  await Expense.deleteMany({});

  return {MESSAGE: 'Todas as despesas foram removidas.'};
}

export {deleteById, deleteAll};
