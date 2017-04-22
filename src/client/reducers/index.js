import notification from './notification';
import invoiceOverview from './invoiceOverview';
import editInvoice from './editInvoice';
import createInvoice from './createInvoice';
import statuses from './statuses';
import user from './user';
import modals from './modals';
import invoicePositions from './invoicePositions';
import invoiceImport from './invoiceImport';
import { reducer as formReducer } from 'redux-form';

const invoiceReducer = {
  notification,
  invoiceOverview,
  editInvoice,
  createInvoice,
  statuses,
  user,
  modals,
  invoicePositions,
  invoiceImport,
  form: formReducer
};

export default invoiceReducer;

