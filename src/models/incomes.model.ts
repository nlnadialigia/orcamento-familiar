import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const IncomeSchema = new Schema({
  title: {
    type: String,
    $exists: true,
    required: true
  },
  value: {
    type: Number,
    $exists: true,
    required: true
  },
  date: {
    type: Date,
    $exists: true,
    required: true
  },
});

const Income = mongoose.model('Income', IncomeSchema);

export default Income;
