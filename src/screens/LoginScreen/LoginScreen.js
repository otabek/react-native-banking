import {SafeAreaView, StatusBar, Text} from 'react-native';
import React, {useCallback, useState} from 'react';
import {USER_NAME, PASSWORD} from '@env';
import {useDispatch} from 'react-redux';
import {setAuth} from '../../features/auth/authSlice';
import LoginFooter from './LoginFooter';
import {styles} from './LoginScreen.styles';
import LoginInput from './LoginInput';
import LoginNav from './LoginNav';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(() => {
    if (userName === USER_NAME && password === PASSWORD) {
      dispatch(setAuth({userName, password}));
    }
  }, [userName, password, dispatch]);

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" />
      <LoginNav />
      <Text style={styles.header}>Welcome to SAIB</Text>
      <LoginInput
        userName={userName}
        password={password}
        setUserName={setUserName}
        setPassword={setPassword}
      />
      <LoginFooter handleSubmit={handleSubmit} />
    </SafeAreaView>
  );
};

export default LoginScreen;
