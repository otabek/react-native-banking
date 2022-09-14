import {Text, View} from 'react-native';
import React from 'react';
import LogoIcon from '../../../assets/Logo.icon';
import {styles} from './OnboardingScreen.styles';
import BackgroundVideo from '../../components/layouts/BackgroundVideo';
import waves from '../../../assets/videos/waves.mp4';

const SecondSpashScreen = () => {
  return (
    <View style={styles.videoRoot}>
      <BackgroundVideo source={waves} />
      <View style={styles.logo}>
        <LogoIcon />
      </View>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.secondaryText}>The Saudi Investment Bank</Text>
          <Text style={styles.moto}>Welcome to the fluid banking</Text>
        </View>
      </View>
    </View>
  );
};

export default SecondSpashScreen;
