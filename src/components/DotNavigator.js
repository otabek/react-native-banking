import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../styles/colors';

const {width} = Dimensions.get('window');

const DotNavigator = ({slides, currentSlideIndex}) => {
  return (
    <View style={styles.navigation}>
      {slides?.map((_, index) => (
        <View
          key={index}
          style={[
            styles.navItem,
            currentSlideIndex === index && styles.navItemActive,
          ]}
        />
      ))}
    </View>
  );
};

export default DotNavigator;

const styles = StyleSheet.create({
  navigation: {
    position: 'absolute',
    width: width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 51,
  },
  navItemActive: {
    backgroundColor: colors.yellow,
    width: 9,
    height: 9,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  navItem: {
    backgroundColor: colors.lightGrey,
    width: 7,
    height: 7,
    borderRadius: 4,
    marginHorizontal: 10,
  },
});
