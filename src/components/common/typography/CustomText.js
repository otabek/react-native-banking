import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {colors} from '../../../styles/colors';

const CustomText = ({color, textAlign, children}) => {
  return <Text style={[styles.text, {color, textAlign}]}>{children}</Text>;
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.black,
  },
});
