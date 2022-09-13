import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.lighterGrey,
  },
  map: {
    height: height - 40,
  },
  atmContainer: {
    position: 'absolute',
    bottom: 30,
  },
  atmWrapper: {
    width: 312,
    height: 172,
    marginLeft: 16,
    marginBottom: 8,
    borderRadius: 10,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
    padding: 16,
  },
  textContainer: {
    marginTop: 4,
    marginBottom: 48,
  },
  name: {
    marginBottom: 4,
  },
  icon: {
    position: 'absolute',
    top: 15,
    right: 14,
  },
  searchContainer: {
    position: 'absolute',
  },
  header: {
    width: width,
    height: 230,
    backgroundColor: colors.white,
    padding: 16,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 28,
  },
  copyIcon: {
    backgroundColor: colors.crude97,
    borderRadius: 32,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    justifyContent: 'center',
    marginTop: 26,
    height: 54,
    paddingHorizontal: 16,
    paddingVertical: 18,
    borderWidth: 1,
    borderColor: colors.crude90,
    borderRadius: 6,
  },
  input: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.black,
  },
  searchIcon: {
    position: 'absolute',
    top: 16,
    right: 16.5,
  },
  filterContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  filterItem: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.black,
    marginRight: 12,
  },
  filterTxt: {
    color: colors.black,
    fontSize: 12,
    lineHeight: 20,
  },
});
