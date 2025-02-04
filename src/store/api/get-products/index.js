import {
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_CLEANUP,
} from '../../actionTypes';

import AxiosCall from '../../../utils/AxiosCall';

const getProductsStart = () => {
  return {type: GET_PRODUCTS_START};
};
const getProductsSuccess = payload => {
  return {type: GET_PRODUCTS_SUCCESS, payload};
};

const getProductsFail = payload => {
  return {type: GET_PRODUCTS_FAIL, payload};
};

export const getProductsCleanUp = () => {
  return {type: GET_PRODUCTS_CLEANUP};
};

export const getProductsRequest = () => {
  return async dispatch => {
    dispatch(getProductsStart());
    try {
      const callObj = {
        method: 'GET',
        path: 'products',
      };
      const data = await AxiosCall(callObj);
      dispatch(getProductsSuccess(data).to);
    } catch (e) {
      if (e.response) {
        // Request made and server responded
        dispatch(getProductsFail(e.response.data));
      } else {
        dispatch(getProductsFail(e));
      }
    }
  };
};
