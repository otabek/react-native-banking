import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ArrowRightIcon from '../../../assets/icons/ArrowRight.icon';
import {useNavigation} from '@react-navigation/native';
import {styles} from './OnboardingScreen.styles';
import BackgroundVideo from '../../components/layouts/BackgroundVideo';
import step from '../../../assets/videos/step.mp4';

const SecondSplashScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.videoRoot}>
      <BackgroundVideo source={step} />
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
