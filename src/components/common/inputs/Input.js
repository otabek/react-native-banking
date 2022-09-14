import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {colors} from '../../../../assets/styles/colors';
import Label from '../typography/Label';

const Input = ({
  value,
  label,
  placeholder,
  handleChange,
  customIcon,
  isSecure,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Label color="crude30">{label}</Label>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.crude50}
        value={value}
        onChangeText={val => handleChange(val)}
        secureTextEntry={isSecure}
      />
      {customIcon}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    height: 70,
    borderWidth: 1,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 6,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    paddingLeft: 17,
    paddingRight: 50,
    paddingVertical: 15,
  },
  input: {
    marginTop: 3,
    fontSize: 14,
    lineHeight: 20,
    color: 'white',
  },
});
