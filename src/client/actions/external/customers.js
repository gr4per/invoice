import request from 'superagent-bluebird-promise';
import Promise from 'bluebird';
import { CUSTOMER_LOAD_START, CUSTOMER_LOAD_ERROR, CUSTOMER_LOAD_SUCCESS } from '../../constants/customer';

/**
 * Load customer information by customer id from '/api/customers' endpoint and
 * dispatches 'CUSTOMER_LOAD_SUCCESS' event with loaded supplier
 *
 * @param customerId
 */
export function loadCustomer(customerId) {
  return function(dispatch, getState) {
    return Promise.resolve(
      dispatch({
        type: CUSTOMER_LOAD_START
      })
    ).then(() => {
      return request.get(`/api/customers/${customerId}`).set(
        'Accept', 'application/json'
      ).then(
        (response) => {
          dispatch({
            type: CUSTOMER_LOAD_SUCCESS,
            customer: response.body
          })
        }
      ).catch((response) => {
        console.error(response);
        dispatch({
          type: CUSTOMER_LOAD_ERROR,
          error: response.body
        });
      })
    });
  }
}
