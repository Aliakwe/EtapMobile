import {combineReducers} from 'redux';

import getProducts from './get-products';
import likedProducts from './liked-products';

const appReducer = combineReducers({
  getProducts,
  likedProducts,
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STATE') {
    state = {};
  }

  return appReducer(state, action);
};

export default rootReducer;
