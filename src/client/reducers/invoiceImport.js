import {
  INVOICE_IMPORT_STARTED,
  INVOICE_CHUNK_IMPORTED,
  INVOICE_IMPORT_FINISHED,
  INVOICE_IMPORT_FAILED,
  INVOICE_IMPORT_CHUNK_SIZE,
  CLEANUP_IMPORT
} from '../constants/invoiceImport';
import _ from 'lodash';

const initialInvoiceImportReducerState = {
  importInProgress: false,
  importPercentage: 0,
  importSize: 0,
  importResult: []
};

/**
 * Calculates next import state percentage like current + chunk_size / import_size * 100
 * in case import_size is 0 -> percentage is 100%
 *
 * @param currentPercentage
 * @param importSize
 * @return {number}
 */
const calculateImportPercentage = (currentPercentage = 0, importSize) => {
  if (_.isNil(importSize) || importSize === 0) {
    return 100;
  }

  return currentPercentage + INVOICE_IMPORT_CHUNK_SIZE / importSize * 100;
};

/**
 * State of InvoiceImport reducer:
 * {
 *  importInProgress: true/false,
 *  importPercentage: 0 - 100,
 *  importSize: integer value that represents number of items to be imported,
 *  importResult: array of statistical objects
 * }
 */
export default function invoiceImport(state = initialInvoiceImportReducerState, action) {
  switch (action.type) {
    case INVOICE_IMPORT_STARTED:
      return {
        ...initialInvoiceImportReducerState,
        importInProgress: true,
        importSize: action.importSize
      };
    case INVOICE_CHUNK_IMPORTED:
      return {
        ...state,
        importResult: state.importResult.concat(action.partialImportResult),
        importPercentage: calculateImportPercentage(state.importPercentage, state.importSize)
      };
    case INVOICE_IMPORT_FINISHED:
      return {
        ...state,
        importInProgress: false,
        importSize: 0,
        importPercentage: 0
      };
    case CLEANUP_IMPORT:
      return {
        ...initialInvoiceImportReducerState
      };
    default:
      return state;
  }
}
