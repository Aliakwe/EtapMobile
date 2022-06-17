/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import FlashMessage, {showMessage} from 'react-native-flash-message';

import Entry from './src/navigations/Entry';
// REDUX STUFFS
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {getStore, getPersistor} from './src/store';

const App: () => Node = () => {
  const myStore = getStore();
  const myPersistor = getPersistor();
  return (
    <Provider store={myStore}>
      <PersistGate loading={null} persistor={myPersistor}>
        <Entry />
      </PersistGate>
      <FlashMessage floating={true} position={'top'} hideOnPress={true} />
    </Provider>
  );
};

export default App;
