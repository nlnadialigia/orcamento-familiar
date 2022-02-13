import { Request, Response } from 'express';
import Income from '../../models/incomes.model';

const getIncomesList = async (req: Request, res: Response) => {
  try {
    const incomes = await Income.find({}, '-_id -__v');

    if (incomes.length === 0) {
      res.json({ MESSAGE: 'Nenhum registro encontradao' });
      return;
    }

    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json(error);
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
    if (error instanceof Error) {
      if (error.name === 'ValidationError') {
        res.status(400).json({ ERRO: 'Todos os campos são obrigatórios.' });
        return;
      }
      res.status(500).json({ ERRO: error });
    }
  }
};

const findIncomeById = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const income = await Income.findOne({ _id: id });
    res.status(200).json(income);
  } catch (err) {
    if (err instanceof Error) {
      if (err.name === 'CastError') {
        res.status(404).json({ ERRO: 'Receita não encontrada' });
        return;
      }
      res.status(500).json({ ERRO: err });
    }
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

