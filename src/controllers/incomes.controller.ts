import Income from '../models/incomes.model';

const getIncomesList = (req: any, res: any) => {
  res.send('Rota GET => Listagem das receitas');
};

const createIncome = async (req: any, res: any) => {
  const { title, value, date } = req.body;

  const income = {
    title,
    value,
    date,
  };

  try {
    await Income.create(income);

    res.status(201).json({ message: 'Receita inserida com sucesso!' });
  } catch (error) {
    res.status(500).json({ erro: error });
  }
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

