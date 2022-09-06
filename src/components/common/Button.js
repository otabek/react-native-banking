import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../styles/colors';

const Button = ({onPress, height = 56, children}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.root, {height}]}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.yellow,
    paddingVertical: 18,
    borderRadius: 100,
  },
  text: {
    color: colors.black,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
  },
});
