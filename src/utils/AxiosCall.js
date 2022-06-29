import axios from 'axios';
import {Platform} from 'react-native';

// export const baseURL = 'https://fakestoreapi.com';
export const baseURL =
  Platform.OS === 'android'
    ? 'https://fakestoreapi.com'
    : 'https://fakestoreapi.com';

const AxiosCall = async (callObj, dispatch) => {
  const {path, method, data, contentType} = callObj;

  const appheaders = {
    // 'Content-Type': 'application/json',
    // Accept: '*/*',
    // 'Accept-Encoding': 'gzip, deflate, br',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const headers = appheaders;

  let url = `${baseURL}/${path}`;

  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
      json: true,
      timeout: 18000,
      // timeout: 100,
    });
    const result = response && response.data;
    return result;
  } catch (error) {
    console.log(error, 'errors');
    if (error.response.status == 401) {
      //  this can handle a universal function of the app when there is 401 status code
    }
    if (error.response.status == 404) {
      //  this can handle a universal function of the app when there is 401 status code
    }
    if (error.response.status == 403) {
      //  this can handle a universal function of the app when there is 401 status code
    }
    throw error;
  }
};

export default AxiosCall;
