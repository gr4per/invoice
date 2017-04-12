import request from 'superagent-bluebird-promise';
import Promise from 'bluebird';
import { UOMS_LOAD_ERROR, UOMS_LOAD_START, UOMS_LOAD_SUCCESS} from '../../constants/unitsOfMeasure';

/**
 * Load available units of measure
 */
export function loadUnitsOfMeasure() {
  return function(dispatch, getState) {
    return Promise.resolve(
      dispatch({
        type: UOMS_LOAD_START
      })
    ).then(() => {
      return request.get(`/api/unitsOfMeasure`).set(
        'Accept', 'application/json'
      ).then(
        (response) => {
          dispatch({
            type: UOMS_LOAD_SUCCESS,
            unitsOfMeasure: response.body
          })
        }
      ).catch((response) => {
        console.error(response);
        dispatch({
          type: UOMS_LOAD_ERROR,
          error: response.body
        });
      })
    });
  }
}
