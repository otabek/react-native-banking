import React from 'react';
import {Platform, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LocationIcon from '../../../assets/icons/Location.icon';
import BurgerIcon from '../../../assets/icons/Burger.icon';
import {requestLocationPermission} from '../../services/permissions/locationPermission';
import {styles} from './LoginScreen.styles';

const LoginNav = () => {
  const navigation = useNavigation();

  const openMapScreen = () => {
    navigation.navigate('Map');
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        onPress={
          Platform.OS === 'ios'
            ? openMapScreen
            : requestLocationPermission(openMapScreen)
        }>
        <LocationIcon />
      </TouchableOpacity>
      <TouchableOpacity>
        <BurgerIcon />
      </TouchableOpacity>
    </View>
  );
};

export default LoginNav;
