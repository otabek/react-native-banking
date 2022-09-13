import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import ArrowRightIcon from '../../../assets/icons/ArrowRight.icon';
import {useNavigation} from '@react-navigation/native';
import {styles} from './OnboardingScreen.styles';

const SecondSplashScreen = () => {
  const navigation = useNavigation();
  const step = require('../../../assets/videos/step.mp4');

  const handlePress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.videoRoot}>
      <Video
        source={step}
        style={styles.backgroundVideo}
        repeat
        resizeMode="cover"
      />
      <SafeAreaView>
        <TouchableOpacity onPress={handlePress} style={styles.skipContainer}>
          <View style={styles.arrow}>
            <ArrowRightIcon />
          </View>
          <Text style={styles.navText}>Skip</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <View style={styles.contentWrapper}>
        <Text style={styles.text}>An app that adapts to your unique needs</Text>
      </View>
    </View>
  );
};

export default SecondSplashScreen;
