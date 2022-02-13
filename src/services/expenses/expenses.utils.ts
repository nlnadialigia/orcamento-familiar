import { Request, Response } from 'express';
import Expense from '../../models/expenses.model';

const getExpensesList = async (req: Request, res: Response) => {
  try {
    const expenses = await Expense.find({}, '-__v');

    if (expenses.length === 0) {
      res.status(204).json({
        MESSAGE: 'Não existem despesas cadastradas.'
      });
    } else {
      res.status(200).json(expenses);
    }
  } catch (error) {
    res.status(500).json({ ERRO: error });
  }
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
      MESSAGE: 'Despesa criada com sucesso!',
      expense
    });
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'ValidationError') {
        res.status(400).json({
          MESSAGE: 'Todos os campos são obrigatórios'
        });
        return;
      }
    }
    res.status(500).json({ ERRO: error });
  }
};

const findExpenseById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const expense = await Expense.findById(id, '-__v');

    res.status(200).json(expense);
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'CastError') {
        res.status(404).json({
          MESSAGE: 'Despesa não encontrada'
        });
        return;
      }
    }
    res.status(500).json({ ERRO: error });
  }
};

const updateExpenseById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const { title, value, date } = req.body;

  const expense = { title, value, date };

  try {
    await Expense.updateOne({ _id: id }, expense);

    res.status(200).json({
      MESSAGE: 'Despesa atualizada com sucesso',
      expense
    });
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'CastError') {
        res.status(404).json({
          MESSAGE: 'Despesa não encontrada.'
        });
        return;
      }
    }
    res.status(500).json({ ERRO: error });
  }
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

