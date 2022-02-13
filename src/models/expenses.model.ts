import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
  title: { type: String, required: true },
  value: { type: Number, required: true },
  date: { type: Date, required: true },
});


const Expense = mongoose.model('Expense', ExpenseSchema);

export default Expense;
