import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import {colors} from '../../styles/colors';
import LogoIcon from '../../../assets/Logo.icon';

const SecondSpashScreen = () => {
  const {styles} = useStyles();
  const waves = require('../../../assets/videos/waves.mp4');

  return (
    <View style={styles.root}>
      <Video
        source={waves}
        style={styles.backgroundVideo}
        repeat
        resizeMode="cover"
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
    logo: {
      marginTop: 122,
      alignItems: 'center',
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginHorizontal: 33,
      marginBottom: 51,
    },
    textContainer: {
      marginBottom: 90,
    },
    secondaryText: {
      textAlign: 'center',
      fontSize: 14,
      lineHeight: 20,
      color: colors.grey,
      marginBottom: 13,
    },
    moto: {
      textAlign: 'center',
      color: 'white',
      fontSize: 33,
      lineHeight: 36,
    },
  });

  return {styles};
};
