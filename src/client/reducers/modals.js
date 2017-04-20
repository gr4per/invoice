import { SHOW_DELETE_MODAL } from '../constants/modals';

export default function modals(state = {deleteModal: {isShown: false}}, action) {
  switch (action.type) {
    case SHOW_DELETE_MODAL:
      return {
        ...state,
        deleteModal: action.deleteModal
      }
    default:
      return state;
  }
}
