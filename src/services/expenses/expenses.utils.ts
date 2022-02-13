import { Request, Response } from 'express';
import Expense from '../../models/expenses.model';

const getExpensesList = async (req: Request, res: Response) => {
  res.send('ok');
};

const createExpense = async (req: Request, res: Response) => {
  const { title, value, date } = req.body;

  const expense = {
    title,
    value,
    date,
  };

  try {
    await Expense.create(expense);

    res.status(201).json({
      message: 'Despesa criada com sucesso!',
      expense
    });
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'ValidationError') {
        res.status(400).json({
          message: 'Todos os campos são obrigatórios'
        });
        return;
      }
    }
    res.status(500).json({ ERRO: error });
  }
};

const findExpenseById = async (req: Request, res: Response) => {
  res.send('ok');
};

const updateExpenseById = async (req: Request, res: Response) => {
  res.send('ok');
};

const deleteExpenseById = async (req: Request, res: Response) => {
  res.send('ok');
};

export {
  createExpense,
  deleteExpenseById,
  findExpenseById,
  getExpensesList,
  updateExpenseById,
};

