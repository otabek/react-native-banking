import {StyleSheet, View} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import {height, width} from '../../App';

const SecondSplashScreen = () => {
  return (
    <View style={styles.root}>
      <Video
        source={require('../../assets/videos/step.mp4')}
        style={styles.backgroundVideo}
        repeat
        resizeMode="cover"
      />
    </View>
  );
};

export default SecondSplashScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
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
});
