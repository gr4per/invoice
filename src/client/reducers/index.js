import notification from './notification';
import invoiceOverview from './invoiceOverview';
import editInvoice from './editInvoice';
import createInvoice from './createInvoice';
import statuses from './statuses';
import user from './user';
import { reducer as formReducer } from 'redux-form';

const invoiceReducer = {
  notification,
  invoiceOverview,
  editInvoice,
  createInvoice,
  statuses,
  user,
  form: formReducer
};

export default invoiceReducer;

