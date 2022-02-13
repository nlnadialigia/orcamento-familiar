const getIncomesList = (req: any, res: any) => {
  res.send('Rota GET => Listagem das receitas');
};

const createIncome = (req: any, res: any) => {
  res.send('Rota POST => Criação de receita');
};

const findIncomeById = (req: any, res: any) => {
  res.send('Rota GET => Busca por ID de uma receita');
};

const updateIncomeById = (req: any, res: any) => {
  res.send('Rota PUT => Alterar receita por ID');
};

const deleteIncomeById = (req: any, res: any) => {
  res.send('Rota DELETE => Deletar receita por ID');
};

export {
  createIncome,
  deleteIncomeById,
  findIncomeById,
  getIncomesList,
  updateIncomeById,
};

