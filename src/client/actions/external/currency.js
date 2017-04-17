import request from 'superagent-bluebird-promise';
import Promise from 'bluebird';
import { CURRENCIES_LOAD_ERROR, CURRENCIES_LOAD_START, CURRENCIES_LOAD_SUCCESS } from '../../constants/currency';

/**
 * Load available currencies
 */
export function loadCurrencies() {
  return function(dispatch, getState) {
    return Promise.resolve(
      dispatch({
        type: CURRENCIES_LOAD_START
      })
    ).then(() => {
      return request.get(`/invoice/api/currency`).set(
        'Accept', 'application/json'
      ).then(
        (response) => {
          dispatch({
            type: CURRENCIES_LOAD_SUCCESS,
            currencies: response.body
          })
        }
      ).catch((response) => {
        console.error(response);
        dispatch({
          type: CURRENCIES_LOAD_ERROR,
          error: response.body
        });
      })
    });
  }
}
