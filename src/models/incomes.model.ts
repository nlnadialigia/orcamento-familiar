import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const IncomeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
});

const Income = mongoose.model('Income', IncomeSchema);

export default Income;
