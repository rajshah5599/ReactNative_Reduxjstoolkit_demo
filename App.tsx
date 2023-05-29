import React from 'react';
import {StatusBar} from 'react-native';

// Navigator
import AppNavigator from './Screens/Navigator/AppNavigator';

// Redux
import {Provider} from 'react-redux';
import store from './Redux/store';

const App = () => {
  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </>
  );
};

export default App;
