import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';

import appReducer from './reducers';

const middlewares = [thunk];

const persistConfig = {
  key: 'etap-root-persisted',
  storage: AsyncStorage,
  whitelist: ['getProducts', 'likedProducts'],
};

const persistedReducer = persistReducer(persistConfig, appReducer);
const composeEnhancers = compose;
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

const persistor = persistStore(store);
const getPersistor = () => persistor;
const getStore = () => store;
const getState = () => {
  return store.getState();
};
export {getStore, getState, getPersistor};
