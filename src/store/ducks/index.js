import { combineReducers } from 'redux';

import AppReducer from './app';

const reducers = combineReducers({
  app: AppReducer
});

export default reducers;