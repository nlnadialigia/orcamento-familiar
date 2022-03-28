import {Request, Response} from 'express';
import 'moment/locale/pt-br';
import {
  createIncomeQuery,
  deleteAllIncomesQuery,
  deleteIncomeQuery,
  filterIncomesQuery,
  listIncomesQuery,
  updateIncomeQuery
} from '../../controller/incomes';
import {findByDateQuery, findByIdQuery} from '../../controller/incomes/findIncomes';
import {searchIncome} from './utils';

const createIncome = async (req: any, res: any): Promise<void> => {
  const {title, value, date} = req.body;

  const search = await searchIncome(title, date);

  if (search === 'Duplicated') {
    res.status(400).json({ERRO: 'Receita já inserida no mês.'});
    return;
  }

  if (!title || !value || !date) {
    res.status(400).json({
      ERRO: 'Todos os campos são obrigatórios'
    });
    return;
  }

  try {
    const income = await createIncomeQuery(title, value, date);
    res.status(201).json(income);
  } catch (error) {
    res.status(500).json({ERRO: error});
  }
};

const getIncomesList = async (req: Request, res: Response) => {
  const {title} = req.query;
  let incomes;
  try {
    if (title) {
      incomes = await filterIncomesQuery(title.toString());
    } else {
      incomes = await listIncomesQuery();
    }
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json(error);
  }
};

const findIncomeById = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;

  try {
    const income = await findByIdQuery(id);

    res.status(200).json(income);
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'CastError') {
        res.status(404).json({ERRO: 'Receita não encontrada'});
        return;
      }
    }
    res.status(500).json({ERRO: error});
  }
};

const findIncomeByMonth = async (req: Request, res: Response) => {
  const {year, month} = req.params;

  try {
    const incomes = await findByDateQuery(year, month);

    if (incomes.incomes.length === 0) {
      res.json({MESSAGE: 'Nenhum registro encontrado'});
    } else {
      res.json(incomes);
    }
  } catch (error) {
    res.status(500).json({ERRO: error});
  }
};

const updateIncomeById = async (req: Request, res: Response) => {
  const {id} = req.params;

  const {title, value, date} = req.body;

  const search = await searchIncome(title, date);

  if (search === 'Duplicated') {
    res.status(400).json({
      ERRO: 'Receita já inserida no mês.'
    });
    return;
  }

  try {
    const income = await updateIncomeQuery(id, title, value, date);
    res.status(200).json(income);
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'CastError') {
        res.status(404).json({ERRO: 'Receita não encontrada'});
        return;
      }
      res.status(500).json({ERRO: error});
    }
  }
};

const deleteIncomeById = async (req: Request, res: Response): Promise<void> => {
  const {id} = req.params;

  try {
    const response = await deleteIncomeQuery(id);
    res.status(200).json(response);
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'CastError') {
        res.status(404).json({ERRO: 'Receita não encontrada'});
        return;
      }
      res.status(500).json({ERRO: error});
    }
  }
};

const deleteAllIncomes = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await deleteAllIncomesQuery();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ERRO: error});
  }
};

export {
  createIncome,
  deleteAllIncomes,
  deleteIncomeById,
  findIncomeByMonth,
  findIncomeById,
  getIncomesList,
  updateIncomeById,
};

