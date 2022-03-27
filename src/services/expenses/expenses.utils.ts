import {Request, Response} from 'express';
import moment from 'moment';
import Expense from '../../models/expenses.model';
import {FindDuplicatedField} from '../../utils';
import {FilterDate} from '../../utils/filter.data';

const getExpensesList = async (req: Request, res: Response) => {
  const {title} = req.query;
  let expenses;

  try {
    if (title) {
      expenses = await Expense.find({title: title}, '-__v');
    } else {
      expenses = await Expense.find({}, '-__v');
    }

    if (expenses.length === 0) {
      res.json({
        MESSAGE: 'Não existem despesas cadastradas.'
      });
    } else {
      res.status(200).json(expenses);
    }
  } catch (error) {
    res.status(500).json({ERRO: error});
  }
};

const createExpense = async (req: Request, res: Response) => {
  const {title, value, date, category} = req.body;

  const expense = {
    title,
    value,
    date: moment.utc(date),
    category
  };

  const search = await FindDuplicatedField(date, title, Expense);
  if (search === 'Duplicated') {
    res.status(400).json({
      ERRO: 'Despesa já existe no mês'
    });
    return;
  }

  // if (!categoryTypes.includes(expense.category)) {
  //   res.status(400).json({
  //     ERRO: `Tipos de categorias permitidos: ${categoryTypes}`
  //   });
  //   return;
  // }

  try {
    await Expense.create(expense);

    res.status(201).json({
      MESSAGE: 'Despesa criada com sucesso!',
      expense
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      if (error.name === 'ValidationError') {
        res.status(400).json({
          // ERRO: 'Todos os campos são obrigatórios'
          ERRO: error.message
        });
        return;
      }
    }
    res.status(500).json({ERRO: error});
  }
};

const findExpenseById = async (req: Request, res: Response): Promise<void> => {
  const {id} = req.params;

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
    res.status(500).json({ERRO: error});
  }
};

const findExpenseByMonth = async (req: Request, res: Response) => {
  const {year, month} = req.params;

  const expenses = await FilterDate(Expense, parseInt(year), parseInt(month));

  if (expenses.length === 0) {
    res.status(404).json({
      MESSAGE: 'Registros não encontrados.'
    });
  } else {
    res.status(200).json(expenses);
  }
};

const updateExpenseById = async (req: Request, res: Response) => {
  const {id} = req.params;

  const {title, value, date, category} = req.body;

  const expense = {
    title,
    value,
    date: moment.utc(date),
    category
  };

  const search = await FindDuplicatedField(date, title, Expense);
  if (search === 'Duplicated') {
    res.status(400).json({
      ERRO: 'Despesa já existe no mês'
    });
    return;
  }

  // if (!categoryTypes.includes(expense.category)) {
  //   res.status(400).json({
  //     ERRO: `Tipos de categorias permitidos: ${categoryTypes}`
  //   });
  //   return;
  // }

  try {
    await Expense.updateOne({_id: id}, expense);

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
    res.status(500).json({ERRO: error});
  }
};

const deleteExpenseById = async (req: Request, res: Response): Promise<void> => {
  const {id} = req.params;

  try {
    await Expense.findByIdAndDelete({_id: id});

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
    res.status(500).json({ERRO: error});
  }
};

const deleteAllExpenses = async (req: Request, res: Response): Promise<void> => {
  try {
    await Expense.deleteMany({});

    res.status(200).json({
      MESSAGE: 'Todas as despesas foram removidas.'
    });
  } catch (error) {
    res.status(500).json({ERRO: error});
  }
};

export {
  createExpense,
  deleteAllExpenses,
  deleteExpenseById,
  findExpenseById,
  findExpenseByMonth,
  getExpensesList,
  updateExpenseById,
};

