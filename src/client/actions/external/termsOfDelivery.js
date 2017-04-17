import request from 'superagent-bluebird-promise';
import Promise from 'bluebird';
import { TOD_LOAD_ERROR, TOD_LOAD_START, TOD_LOAD_SUCCESS } from '../../constants/termsOfDelivery';

/**
 * Load available terms of delivery
 */
export function loadTermsOfDelivery() {
  return function(dispatch, getState) {
    return Promise.resolve(
      dispatch({
        type: TOD_LOAD_START
      })
    ).then(() => {
      return request.get(`/invoice/api/termsOfDelivery`).set(
        'Accept', 'application/json'
      ).then(
        (response) => {
          dispatch({
            type: TOD_LOAD_SUCCESS,
            termsOfDelivery: response.body
          })
        }
      ).catch((response) => {
        console.error(response);
        dispatch({
          type: TOD_LOAD_ERROR,
          error: response.body
        });
      })
    });
  }
}
