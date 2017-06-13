import { UOMS_LOAD_SUCCESS } from '../constants/unitsOfMeasure';

// State of invoicePositions reducer:
// {
//     unitsOfMeasure: [<list of invoiceMeasures>]
// }
export default function invoicePositions(state = {}, action) {
  switch (action.type) {
    case UOMS_LOAD_SUCCESS:
      return {
        ...state,
        unitsOfMeasure: action.unitsOfMeasure
      };
    default:
      return state;
  }
}
