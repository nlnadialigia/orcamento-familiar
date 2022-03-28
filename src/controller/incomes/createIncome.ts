import Income from "../../models/incomes.model";

async function createIncome(title: string, value: number, date: Date) {
  try {
    const income = new Income({
      title,
      value,
      date
    });

    await income.save();

    return {
      incomeId: income._id,
      title: income.title,
      value: income.value,
      date: income.date
    };
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'ValidationError') {
        return error.message;
      }
    }
    return error
  }
};

export {createIncome};
