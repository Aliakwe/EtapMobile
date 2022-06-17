import {
  LIKED_PRODUCTS_START,
  LIKED_PRODUCTS_SUCCESS,
  LIKED_PRODUCTS_FAIL,
  LIKED_PRODUCTS_CLEANUP,
} from '../../actionTypes';

import AxiosCall from '../../../utils/AxiosCall';

const likedProductsStart = () => {
  return {type: LIKED_PRODUCTS_START};
};
const likedProductsSuccess = payload => {
  return {type: LIKED_PRODUCTS_SUCCESS, payload};
};

const likedProductsFail = payload => {
  return {type: LIKED_PRODUCTS_FAIL, payload};
};

export const likedProductsCleanUp = () => {
  return {type: LIKED_PRODUCTS_CLEANUP};
};

export const likedProductsRequest = payload => {
  return async dispatch => {
    dispatch(likedProductsStart());
    try {
      // update data with payload from the ui
      dispatch(likedProductsSuccess(payload));
    } catch (e) {
      dispatch(likedProductsFail('Something went wrong'));
    }
  };
};
