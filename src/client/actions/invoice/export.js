import request from 'superagent-bluebird-promise';
import Promise from 'bluebird';
import {
  INVOICE_EXPORT_ERROR,
  INVOICE_EXPORT_START,
  INVOICE_EXPORT_SUCCESS,
  MARK_FOR_EXPORT,
  UNMARK_FOR_EXPORT
} from '../../constants/invoiceExport';
import _ from 'lodash';

export const exportInvoices = () => {
  return (dispatch, getState) => {
    let idsToExport = _.size(getState().invoiceOverview.checked) === 0 ?
      _.map(getState().invoiceOverview.invoices, (inv) => (inv.key)) : getState().invoiceOverview.checked;

    return Promise.resolve(
      dispatch({
        type: INVOICE_EXPORT_START
      })
    ).then(() => {
      return request.post(`/invoice/api/invoices/export`).set(
        'Accept', 'application/json'
      ).send(idsToExport)
    }).then(() => {
      dispatch({
        type: INVOICE_EXPORT_SUCCESS
      })
    }).catch((response) => {
      return Promise.resolve(
        dispatch({
          type: INVOICE_EXPORT_ERROR,
          error: response.body
        }));
    })
  }
};

export const markForExport = (idList) => {
  return (dispatch, getState) => {
    return Promise.resolve(
      dispatch({
        type: MARK_FOR_EXPORT,
        items: idList
      })
    )
  }
};

export const unMarkForExport = (idList) => {
  return (dispatch, getState) => {
    return Promise.resolve(
      dispatch({
        type: UNMARK_FOR_EXPORT,
        items: idList
      })
    )
  }
};


