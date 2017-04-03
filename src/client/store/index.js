import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';
import invoiceReducer from '../reducers';

const finalCreateStore = compose(
  applyMiddleware(
    thunkMiddleware
  )
)(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(combineReducers(invoiceReducer), initialState)
}
