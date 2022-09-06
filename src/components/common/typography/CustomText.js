import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {colors} from '../../../styles/colors';

const CustomText = ({color = 'black', textAlign, children}) => {
  return (
    <Text style={[styles.text, {color: colors[color], textAlign}]}>
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    lineHeight: 20,
  },
});
