/**
 * React Native Stater App
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import Router from './src/Router';
import {AuthProvider} from './src/config/AppContext';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (

    <Provider store={store}>
    <AuthProvider>
      <Router />
    </AuthProvider>
    </Provider>
  );
};

export default App;
