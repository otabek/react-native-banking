import {StyleSheet, Text as RNText} from 'react-native';
import React from 'react';
import {colors} from '../../../styles/colors';

const Text = () => {
  return <RNText style={styles.text}>Text</RNText>;
};

export default Text;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.black,
  },
});
