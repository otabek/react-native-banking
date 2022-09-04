import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {colors} from '../../../styles/colors';

const Label = ({color, children}) => {
  return <Text style={[styles.label, {color: color}]}>{children}</Text>;
};

export default Label;

const styles = StyleSheet.create({
  label: {
    fontSize: 10,
    lineHeight: 14,
    color: colors.crude50,
  },
});
