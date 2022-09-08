import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../styles/colors';

const Button = ({onPress, height = 56, paddingVertical = 18, children}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.root, {height, paddingVertical}]}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.yellow,
    borderRadius: 100,
  },
  text: {
    color: colors.black,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
  },
});
