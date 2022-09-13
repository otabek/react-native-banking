import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import Button from '../../components/common/Button';
import CustomText from '../../components/common/typography/CustomText';
import {styles} from './LoginScreen.styles';

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
