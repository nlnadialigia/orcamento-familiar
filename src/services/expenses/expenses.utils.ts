import { Request, Response } from 'express';

const getExpensesList = async (req: Request, res: Response) => {
  res.send('ok');
};

const createExpense = async (req: Request, res: Response) => {
  res.send('ok');
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

