import request from 'superagent-bluebird-promise';
import Promise from 'bluebird';
import { TOP_LOAD_ERROR, TOP_LOAD_START, TOP_LOAD_SUCCESS } from '../../constants/termsOfPayment';

/**
 * Load available terms of payment
 */
export function loadTermsOfPayment() {
  return function(dispatch, getState) {
    return Promise.resolve(
      dispatch({
        type: TOP_LOAD_START
      })
    ).then(() => {
      return request.get(`/api/termsOfPayment`).set(
        'Accept', 'application/json'
      ).then(
        (response) => {
          dispatch({
            type: TOP_LOAD_SUCCESS,
            termsOfPayment: response.body
          })
        }
      ).catch((response) => {
        console.error(response);
        dispatch({
          type: TOP_LOAD_ERROR,
          error: response.body
        });
      })
    });
  }
}
