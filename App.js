/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider, useSelector} from 'react-redux';
import {persistor, store} from './src/app/store';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import OnboardingScreen from './src/screens/OnboardingScreen/OnboardingScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import {PersistGate} from 'redux-persist/integration/react';
import MapScreen from './src/screens/MapScreen/MapScreen';

const Stack = createNativeStackNavigator();

const NavigationScreens = () => {
  const isLoggedIn = useSelector(state => state.userName);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isLoggedIn ? (
        <>
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </>
      )}
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
};

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <NavigationScreens />
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

export default App;
