import { Request, Response } from 'express';
import moment from 'moment';
import Expense from '../../models/expenses.model';
import { FindDuplicatedField } from '../../utils';

const getExpensesList = async (req: Request, res: Response) => {
  try {
    const expenses = await Expense.find({}, '-__v');

    if (expenses.length === 0) {
      res.json({
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
    date: moment.utc(date),
  };

  const search = await FindDuplicatedField(date, title, Expense);
  if (search === 'Duplicated') {
    res.status(400).json({
      ERRO: 'Despesa já existe no mês'
    });
    return;
  }

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
          ERRO: 'Todos os campos são obrigatórios'
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
          ERRO: 'Despesa não encontrada'
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

  const expense = {
    title,
    value,
    date: moment.utc(date)
  };

  const search = await FindDuplicatedField(date, title, Expense);
  if (search === 'Duplicated') {
    res.status(400).json({
      ERRO: 'Despesa já existe no mês'
    });
    return;
  }

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
  const { id } = req.params;

  try {
    await Expense.findByIdAndDelete({ _id: id });

    res.status(200).json({
      MESSAGE: 'Despesa deletada com sucesso!'
    });
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'CastError') {
        res.status(404).json({
          ERRO: 'Despesa não encontrada'
        });
        return;
      }
    }
    res.status(500).json({ ERRO: error });
  }
};

const deleteAllExpenses = async (req: Request, res: Response) => {
  try {
    await Expense.deleteMany({});

    res.status(200).json({
      MESSAGE: 'Todas as despesas foram removidas.'
    });
  } catch (error) {
    res.status(500).json({ ERRO: error });
  }
};

export {
  createExpense,
  deleteAllExpenses,
  deleteExpenseById,
  findExpenseById,
  getExpensesList,
  updateExpenseById,
};

