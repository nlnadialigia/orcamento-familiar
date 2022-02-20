import moment from 'moment';
import 'moment/locale/pt-br';

function Month(date: moment.MomentInput) {
  return moment.utc(date).get('month') + 1;
}

function Year(date: moment.MomentInput) {
  return moment.utc(date).get('year') + 1;
}

export { Month, Year };

