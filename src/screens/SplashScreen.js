import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import {colors} from '../styles/colors';
import DotIcon from '../../assets/icons/Dot.icon';
import YellowDotIcon from '../../assets/icons/YellowDot.icon';
import {height, width} from '../../App';

const SecondSpashScreen = () => {
  return (
    <View style={styles.root}>
      <Video
        source={require('../../assets/videos/waves.mp4')}
        style={styles.backgroundVideo}
        repeat
        resizeMode="cover"
      />
      <View style={styles.logo}>
        <Image source={require('../../assets/logo.png')} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.secondaryText}>The Saudi Investment Bank</Text>
        <Text style={styles.moto}>Welcome to the fluid banking</Text>
        <View style={styles.navigation}>
          <View style={styles.navItem}>
            <YellowDotIcon />
          </View>
          <View style={styles.navItem}>
            <DotIcon />
          </View>
          <View style={styles.navItem}>
            <DotIcon />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SecondSpashScreen;

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
  logo: {
    marginTop: 122,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 33,
    marginBottom: 51,
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
  navigation: {
    marginTop: 90,
    flexDirection: 'row',
    alignItems: 'center',
  },
  navItem: {
    marginHorizontal: 10,
  },
});
