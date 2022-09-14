import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../../assets/styles/colors';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.black,
  },
  navbar: {
    marginTop: Platform.OS === 'ios' ? 5 : 25,
    marginHorizontal: 23,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    color: 'white',
    fontSize: 33,
    lineHeight: 36,
    marginHorizontal: 33,
    marginBottom: 46,
    marginTop: 70,
    textAlign: 'center',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginHorizontal: 16,
  },
  clientCreation: {
    height: 54,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 6,
    justifyContent: 'center',
    marginTop: 15,
  },
  firstAcc: {
    marginTop: 32,
    marginBottom: 76,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    top: 24,
    right: 16,
  },
});
