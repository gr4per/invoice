import request from 'superagent-bluebird-promise';
import Promise from 'bluebird';
import {
  INVOICE_IMPORT_STARTED,
  INVOICE_CHUNK_IMPORTED,
  INVOICE_IMPORT_FINISHED,
  INVOICE_IMPORT_FAILED,
  INVOICE_IMPORT_CHUNK_SIZE,
  CLEANUP_IMPORT
} from '../../constants/invoiceImport';
import _ from 'lodash';

export function cleanupImportReducer() {
  return function(dispatch, getState) {
    dispatch({type: CLEANUP_IMPORT})
  }
}

export function importInvoices(invoices) {
  return function(dispatch, getState) {
    return Promise.resolve(
      dispatch({
        type: INVOICE_IMPORT_STARTED,
        importSize: _.size(invoices)
      })
    ).then(() => {
      return Promise.all(
        _(invoices).chunk(INVOICE_IMPORT_CHUNK_SIZE).map((invoiceChunk) => {
          return request.post(`/invoice/api/invoices/import`).set(
            'Accept', 'application/json'
          ).send(invoiceChunk).then((response) => {
            return Promise.resolve(
              dispatch({
                type: INVOICE_CHUNK_IMPORTED,
                partialImportResult: response.body
              })
            );
          })
        })
      )
    }).then((result) => {
      dispatch({
        type: INVOICE_IMPORT_FINISHED
      })
    }).catch((error) => {
      console.log(error);
      dispatch({
        type: INVOICE_IMPORT_FAILED
      })
    })
  }
}
