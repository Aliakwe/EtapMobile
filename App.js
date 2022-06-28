/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';
import Entry from './src/navigations/Entry';
// REDUX STUFFS
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {getStore, getPersistor} from './src/store';

const App = () => {
  const myStore = getStore();
  const myPersistor = getPersistor();
  return (
    <Provider store={myStore}>
      <PersistGate loading={null} persistor={myPersistor}>
        <Entry />
      </PersistGate>
    </Provider>
  );
};

export default App;
