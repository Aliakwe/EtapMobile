import {
  LIKED_PRODUCTS_START,
  LIKED_PRODUCTS_SUCCESS,
  LIKED_PRODUCTS_FAIL,
  LIKED_PRODUCTS_CLEANUP,
} from '../../actionTypes';

import {likedProducts} from '../../initialState';

const likedProductsReducer = (state = likedProducts, action) => {
  switch (action.type) {
    case LIKED_PRODUCTS_START:
      return {...state, isLoading: true, error: null};
    case LIKED_PRODUCTS_SUCCESS:
      return {
        ...state,
        result: action.payload,
        isLoading: false,
        isSuccessful: true,
        error: null,
      };
    case LIKED_PRODUCTS_FAIL:
      return {...state, error: action.payload, isLoading: false};
    case LIKED_PRODUCTS_CLEANUP:
      return {...state, error: null, isLoading: false, isSuccessful: false};
    default:
      return state;
  }
};

export default likedProductsReducer;
