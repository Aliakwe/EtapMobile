/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

it('renders correctly', () => {
  const initialState = {output: 10};
  const mockStore = configureStore();
  let store;
  store = mockStore(initialState);
  renderer.create(
    <Provider store={store}>
      <App />
    </Provider>,
  );
});
