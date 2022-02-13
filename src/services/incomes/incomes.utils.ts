import { Request, Response } from 'express';
import Income from '../../models/incomes.model';

const getIncomesList = async (req: Request, res: Response) => {
  try {
    const incomes = await Income.find();

    res.json(incomes);
  } catch (error) {
    res.status(500).json({ erro: error });
  }
};

const createIncome = async (req: Request, res: Response) => {
  const { title, value, date } = req.body;

  const income = {
    title,
    value,
    date,
  };

  try {
    await Income.create(income);

    res.status(201).json({
      message: 'Receita inserida com sucesso!',
      income
    });
  } catch (error) {
    res.status(500).json({ erro: error });
  }
};

const findIncomeById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const income = await Income.findById({ _id: id });
    res.json(income);
  } catch (error) {
    res.status(404).json({
      message: 'Receita não encontrada!',
    });
  }
};

const updateIncomeById = async (req: Request, res: Response) => {
  res.send('Rota PUT => Alterar receita por ID');
};

const deleteIncomeById = async (req: Request, res: Response) => {
  res.send('Rota DELETE => Deletar receita por ID');
};

export {
  createIncome,
  deleteIncomeById,
  findIncomeById,
  getIncomesList,
  updateIncomeById,
};

