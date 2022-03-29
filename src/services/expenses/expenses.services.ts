import {Request, Response} from 'express';
import {
  createExpenseQuery,
  deleteAll,
  deleteById,
  findById,
  findByYearMonth,
  listAllExpensesQuery,
  listExpensesQuery,
  updateExpense
} from '../../controller/expenses';
import {categoryTypes, searchExpense, verifyCategory} from './expenses.utils';

const createExpense = async (req: Request, res: Response) => {
  const {title, value, date, category} = req.body;

  const search = await searchExpense(title, date);
  if (search === 'Duplicated') {
    res.status(400).json({
      ERRO: 'Despesa já existe no mês'
    });
    return;
  }

  if (!title || !value || !date) {
    res.status(400).json({
      ERRO: 'Todos os campos são obrigatórios'
    });
    return;
  }

  try {
    const expense = await createExpenseQuery(title, value, date, category);

    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ERRO: error});
  }
};

const getExpensesList = async (req: Request, res: Response) => {
  const {title} = req.query;
  let expenses;

  try {
    if (title) {
      expenses = await listExpensesQuery(title.toString());
    } else {
      expenses = await listAllExpensesQuery();
    }

    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ERRO: error});
  }
};

const findExpenseById = async (req: Request, res: Response): Promise<void> => {
  const {id} = req.params;

  try {
    const expense = await findById(id);
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

  const expenses = await findByYearMonth(year, month);

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

  const search = await searchExpense(title, date);
  if (search === 'Duplicated') {
    res.status(400).json({
      ERRO: 'Despesa já existe no mês'
    });
    return;
  }

  const verify = verifyCategory(category);
  if (!verify) {
    res.status(400).json({
      ERRO: `Tipos de categorias permitidos: ${categoryTypes}`
    });
    return;
  }

  try {
    const expense = await updateExpense(id, title, value, date, category);

    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ERRO: error});
  }
};

const deleteExpenseById = async (req: Request, res: Response): Promise<void> => {
  const {id} = req.params;

  try {
    const response = await deleteById(id);

    res.status(200).json(response);
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
    const response = await deleteAll();

    res.status(200).json(response);
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

