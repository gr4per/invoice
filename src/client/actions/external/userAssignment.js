import request from 'superagent-bluebird-promise';
import Promise from 'bluebird';
import {
  ASSIGNMENT_LOAD_ERROR,
  ASSIGNMENT_LOAD_START,
  ASSIGNMENT_LOAD_SUCCESS
} from '../../constants/userAssignment';

/**
 * Load currentUserAssignment
 */
export function loadCurrentUserAssignment() {
  return function(dispatch, getState) {
    return Promise.resolve(
      dispatch({
        type: ASSIGNMENT_LOAD_START
      })
    ).then(() => {
      return request.get(`/api/userAssignment/${getState().user.id}`).set(
        'Accept', 'application/json'
      ).then(
        (response) => {
          dispatch({
            type: ASSIGNMENT_LOAD_SUCCESS,
            userAssignment: response.body
          })
        }
      ).catch((response) => {
        console.error(response);
        dispatch({
          type: ASSIGNMENT_LOAD_ERROR,
          error: response.body
        });
      })
    });
  }
}
