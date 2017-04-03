import request from 'superagent-bluebird-promise';
import Promise from 'bluebird';
import { SUPPLIER_LOAD_START, SUPPLIER_LOAD_SUCCESS, SUPPLIER_LOAD_ERROR } from '../../constants/supplier';

/**
 * Load supplier information by supplier id from '/api/supplier' endpoint and
 * dispatches 'SUPPLIER_LOAD_SUCCESS' event with loaded supplier
 *
 * @param supplierId
 */
export function loadSupplier(supplierId) {
  return function(dispatch, getState) {
    return Promise.resolve(
      dispatch({
        type: SUPPLIER_LOAD_START
      })
    ).then(() => {
      return request.get(`/api/suppliers/${supplierId}`).set(
        'Accept', 'application/json'
      ).then(
        (response) => {
          dispatch({
            type: SUPPLIER_LOAD_SUCCESS,
            supplier: response.body
          })
        }
      ).catch((response) => {
        console.error(response);
        dispatch({
          type: SUPPLIER_LOAD_ERROR,
          error: response.body
        });
      })
    });
  }
}
