import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/styles/colors';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginHorizontal: 16,
  },
  avatarWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 120,
    height: 120,
    marginTop: 103,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(21, 23, 35, 0.1)',
    borderRadius: 60,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  avatarPng: {
    width: 100,
    height: 100,
  },
  icon: {
    position: 'absolute',
    bottom: 3,
    right: 4,
    width: 28,
    height: 28,
    backgroundColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  avatarLabel: {
    marginTop: 20,
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.2,
    textTransform: 'uppercase',
    color: colors.crude60,
  },
  username: {
    marginTop: 8.5,
    marginBottom: 36,
    fontSize: 21,
    lineHeight: 24,
    color: colors.black,
  },
  userInfo: {
    borderColor: colors.crude90,
    borderBottomWidth: 1,
    paddingVertical: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 4,
  },
  topBorder: {
    borderColor: colors.crude90,
    borderTopWidth: 1,
  },
  mrgn: {
    marginTop: 4,
  },
  bankHeader: {
    marginTop: 24,
    marginBottom: 12,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    color: colors.black,
  },
  btn: {
    marginTop: 26,
    marginBottom: 102,
  },
});
