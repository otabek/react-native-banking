/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Dimensions} from 'react-native';
import SecondSplashScreen from './src/screens/SecondSplashScreen';
// import SplashScreen from './src/screens/SplashScreen';

export const {width, height} = Dimensions.get('window');

const App = () => {
  return (
    // <SplashScreen />
    <SecondSplashScreen />
  );
};

export default App;
