import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Button from '../../components/common/Button';
import CustomText from '../../components/common/typography/CustomText';

const LoginFooter = ({handleSubmit}) => {
  return (
    <View style={styles.bottomContainer}>
      <Button onPress={handleSubmit}>Ok, proceed</Button>
      <TouchableOpacity style={styles.clientCreation}>
        <CustomText color="white" textAlign="center">
          Already a client? Create your user!
        </CustomText>
      </TouchableOpacity>
      <View style={styles.firstAcc}>
        <CustomText color="white">Not a client? </CustomText>
        <TouchableOpacity>
          <CustomText color="yellow">Open your first account</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginFooter;

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginHorizontal: 16,
  },
  clientCreation: {
    height: 54,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 6,
    justifyContent: 'center',
    marginTop: 15,
  },
  firstAcc: {
    marginTop: 32,
    marginBottom: 76,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
