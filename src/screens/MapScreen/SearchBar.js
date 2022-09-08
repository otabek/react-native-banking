import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CompassIcon from '../../../assets/icons/Compass.icon';
import CancelIcon from '../../../assets/icons/Cancel.icon';
import {colors} from '../../styles/colors';
import SearchIcon from '../../../assets/icons/Search.icon';

const {width} = Dimensions.get('window');

const SearchBar = () => {
  const filters = [{name: 'ATMs'}, {name: 'For ladies'}, {name: 'Drive-up'}];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.icon}>
            <CompassIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <CancelIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor={colors.crude50}
          />
          <View style={styles.searchIcon}>
            <SearchIcon />
          </View>
        </View>
        <View style={styles.filterContainer}>
          {filters.map(filter => (
            <TouchableOpacity key={filter.name} style={styles.filterItem}>
              <Text style={styles.filterTxt}>{filter.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
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
  icon: {
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
