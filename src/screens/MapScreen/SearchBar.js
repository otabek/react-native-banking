import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CompassIcon from '../../../assets/icons/Compass.icon';
import CancelIcon from '../../../assets/icons/Cancel.icon';
import {colors} from '../../../assets/styles/colors';
import SearchIcon from '../../../assets/icons/Search.icon';
import {styles} from './MapScreen.styles';

const SearchBar = () => {
  const filters = [{name: 'ATMs'}, {name: 'For ladies'}, {name: 'Drive-up'}];

  return (
    <View style={styles.searchContainer}>
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
