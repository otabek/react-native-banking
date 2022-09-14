import {Text, View} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import LogoIcon from '../../../assets/Logo.icon';
import {styles} from './OnboardingScreen.styles';

const SecondSpashScreen = () => {
  const waves = require('../../../assets/videos/waves.mp4');

  return (
    <View style={styles.videoRoot}>
      <Video
        source={waves}
        style={styles.backgroundVideo}
        repeat
        resizeMode="cover"
        onError={err => console.log('error', err)}
      />
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
