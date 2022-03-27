import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: {
      values: true,
      message: 'Campo obrigatório!'
    }
  },
  date: {
    type: Date,
    required: {
      values: true,
      message: 'Campo obrigatório!'
    }
  },
  category: {
    type: String,
    enum: {
      values: ['Alimentação', 'Saúde', 'Moradia', 'Transporte', 'Educação', 'Lazer', 'Imprevistos', 'Outras'],
      message: 'Tipo de categoria não permitido'
    },
    default: 'Outras'
  }
});

const Expense = mongoose.model('Expense', ExpenseSchema);

export default Expense;
