import moment from 'moment';
import 'moment/locale/pt-br';

function FindMonth(date: moment.MomentInput) {
  date = moment.utc(date);
  const month = date.toString();
  console.log(date.toString());
  const newDate = month.slice(4, 7);

  return newDate;
}

export { FindMonth };

