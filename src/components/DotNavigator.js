import {StyleSheet, View} from 'react-native';
import React from 'react';
import YellowDotIcon from '../../assets/icons/YellowDot.icon';
import DotIcon from '../../assets/icons/Dot.icon';

const DotNavigator = () => {
  return (
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
  );
};

export default DotNavigator;

const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navItem: {
    marginHorizontal: 10,
  },
});
