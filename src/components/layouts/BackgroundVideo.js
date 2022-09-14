import {Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import Video from 'react-native-video';

const {width, height} = Dimensions.get('window');

const BackgroundVideo = ({source}) => {
  return (
    <Video
      style={styles.backgroundVideo}
      source={source}
      repeat
      resizeMode="cover"
    />
  );
};

export default BackgroundVideo;

const styles = StyleSheet.create({
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
