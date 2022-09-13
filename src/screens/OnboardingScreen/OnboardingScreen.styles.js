import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  videoRoot: {
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
  contentWrapper: {
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
