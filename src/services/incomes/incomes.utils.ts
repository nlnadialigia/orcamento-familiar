import { Request, Response } from 'express';
import moment from 'moment';
import 'moment/locale/pt-br';
import Income from '../../models/incomes.model';
import { FindDuplicatedField } from '../../utils';
import { FilterDate } from '../../utils/filter.data';

const getIncomesList = async (req: Request, res: Response) => {
  const { title } = req.query;
  let incomes;

  try {
    if (title) {
      incomes = await Income.find({ title: title }, '-__v');
    } else {
      incomes = await Income.find({}, '-__v');
    }

    if (incomes.length === 0) {
      res.json({
        MESSAGE: 'Nenhum registro encontrado'
      });
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
    date: moment.utc(date),
  };

  const search = await FindDuplicatedField(date, title, Income);

  if (search === 'Duplicated') {
    res.status(400).json({
      ERRO: 'Receita já inserida no mês.'
    });
    return;
  }

  try {
    await Income.create(income);

    res.status(201).json({
      MESSAGE: 'Receita inserida com sucesso!',
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
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'CastError') {
        res.status(404).json({ ERRO: 'Receita não encontrada' });
        return;
      }
      res.status(500).json({ ERRO: error });
    }
  }
};

const findIncomeByMonth = async (req: Request, res: Response) => {
  const { year, month } = req.params;

  const incomes = await FilterDate(Income, parseInt(year), parseInt(month));

  if (incomes.length === 0) {
    res.json({ MESSAGE: 'Nenhum registro encontrado' });
  } else {
    res.json(incomes);
  }
};

const updateIncomeById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const { title, value, date } = req.body;

  const income = {
    title,
    value,
    date: moment.utc(date),
  };

  const search = await FindDuplicatedField(date, title, Income);

  if (search === 'Duplicated') {
    res.status(400).json({
      ERRO: 'Receita já inserida no mês.'
    });
    return;
  }

  try {
    await Income.updateOne({ _id: id }, income);

    res.status(200).json({
      MESSAGE: 'Receita atualizada com sucesso',
      income
    });
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'CastError') {
        res.status(404).json({ ERRO: 'Receita não encontrada' });
        return;
      }
      res.status(500).json({ ERRO: error });
    }
  }
};

const deleteIncomeById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await Income.findByIdAndDelete({ _id: id });
    res.status(200).json({
      MESSAGE: 'Receita removida com sucesso!'
    });
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'CastError') {
        res.status(404).json({ ERRO: 'Receita não encontrada' });
        return;
      }
      res.status(500).json({ ERRO: error });
    }
  }
};

const deleteAll = async (req: Request, res: Response) => {
  try {
    await Income.deleteMany({});
    res.status(200).json({
      MESSAGE: 'Todas as receitas foram removidas!'
    });
  } catch (error) {
    res.status(500).json({ ERRO: error });
  }
};

export {
  createIncome,
  deleteAll,
  deleteIncomeById,
  findIncomeByMonth,
  findIncomeById,
  getIncomesList,
  updateIncomeById,
};

