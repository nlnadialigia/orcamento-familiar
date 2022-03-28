import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const IncomeSchema = new Schema({
  title: {
    type: String,
    required: {
      values: true,
      message: 'Campo obrigatório!'
    }
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
});

const Income = mongoose.model('Income', IncomeSchema);

export default Income;
