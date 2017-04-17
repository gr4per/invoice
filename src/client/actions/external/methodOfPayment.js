import request from 'superagent-bluebird-promise';
import Promise from 'bluebird';
import { MOP_LOAD_ERROR, MOP_LOAD_START, MOP_LOAD_SUCCESS } from '../../constants/methodOfPayment';

/**
 * Load available methods of payment
 */
export function loadMethodsOfPayment() {
  return function(dispatch, getState) {
    return Promise.resolve(
      dispatch({
        type: MOP_LOAD_START
      })
    ).then(() => {
      return request.get(`/invoice/api/methodOfPayment`).set(
        'Accept', 'application/json'
      ).then(
        (response) => {
          dispatch({
            type: MOP_LOAD_SUCCESS,
            methodsOfPayment: response.body
          })
        }
      ).catch((response) => {
        console.error(response);
        dispatch({
          type: MOP_LOAD_ERROR,
          error: response.body
        });
      })
    });
  }
}
