import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import ArrowRightIcon from '../../../assets/icons/ArrowRight.icon';
import {useNavigation} from '@react-navigation/native';

const SecondSplashScreen = () => {
  const navigation = useNavigation();
  const {styles} = useStyles();
  const step = require('../../../assets/videos/step.mp4');

  const handlePress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.root}>
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
      <View style={styles.content}>
        <Text style={styles.text}>An app that adapts to your unique needs</Text>
      </View>
    </View>
  );
};

export default SecondSplashScreen;

const useStyles = () => {
  const {width, height} = useWindowDimensions();

  const styles = StyleSheet.create({
    root: {
      flex: 1,
      width: width,
      height: height,
    },
    backgroundVideo: {
      width: width,
      height: height,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    skipContainer: {
      alignSelf: 'flex-end',
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 24,
      marginTop: 20,
    },
    arrow: {
      marginRight: 7,
    },
    navText: {
      color: 'black',
      fontSize: 14,
      lineHeight: 20,
    },
    content: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginHorizontal: 66,
      marginBottom: 51,
    },
    text: {
      textAlign: 'center',
      fontSize: 33,
      lineHeight: 36,
      letterSpacing: -0.5,
      marginBottom: 54,
      color: 'black',
    },
  });
  return {styles};
};
