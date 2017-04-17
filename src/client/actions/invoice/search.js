import request from 'superagent-bluebird-promise';
import Promise from 'bluebird';
import contentRange from 'content-range';
import { getFormValues } from 'redux-form';
import { INVOICES_LOAD_ERROR, INVOICES_LOAD_SUCCESS, INVOICES_LOAD_START } from '../../constants/invoice';
import { showNotification, removeNotification } from '../notifications';
import { SEARCH_INVOICE_FORM } from '../../constants/forms';
import { COUNT } from '../../constants/pagination';

export function searchInvoices(offset = 0, count = COUNT) {
  return function(dispatch, getState) {
    return Promise.resolve(
      dispatch({
        type: INVOICES_LOAD_START
      })
    ).then(() => {
      return Promise.resolve(
        dispatch(showNotification('Messages.loadingData'))
      );
    }).then(() => {
      return request.get('/invoice/api/invoices')
        .query(getFormValues(SEARCH_INVOICE_FORM)(getState()))
        .query({offset: offset, count: count})
        .set(
        'Accept', 'application/json'
      ).then(
        (response) => {
          dispatch({
            type: INVOICES_LOAD_SUCCESS,
            invoices: response.body,
            pagination: contentRange.parse(response.header['content-range'])
          })
        }
      ).catch((response) => {
        return Promise.resolve(
          dispatch(showNotification('Messages.loadingDataError', 'error', 10, false))
        ).then((err) => {
          dispatch({
            type: INVOICES_LOAD_ERROR,
            error: response.body
          })
        })
      }).finally(() => {
        // removing all notifications or they will be left in 'notification queue'
        dispatch(removeNotification());
      });
    });
  }
}
