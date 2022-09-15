import React, {useCallback} from 'react';
import {LogBox, Platform, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LocationIcon from '../../../assets/icons/Location.icon';
import BurgerIcon from '../../../assets/icons/Burger.icon';
import {
  getCurrentPosition,
  requestLocationPermission,
} from '../../services/permissions/locationPermission';
import {styles} from './LoginScreen.styles';

LogBox.ignoreLogs(['new NativeEventEmitter']);

const LoginNav = () => {
  const navigation = useNavigation();

  const navigateToMap = useCallback(() => {
    navigation.navigate('Map');
  }, [navigation]);

  const openMapOnIos = useCallback(() => {
    getCurrentPosition(navigateToMap);
  }, [navigateToMap]);

  // const openMapOnAndroid = useCallback(() => {
  //   requestLocationPermission(navigateToMap);
  // }, [navigateToMap]);

  const openMapOnAndroid = () => {
    requestLocationPermission(navigateToMap);
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        onPress={Platform.OS === 'ios' ? openMapOnIos : openMapOnAndroid}>
        <LocationIcon />
      </TouchableOpacity>
      <TouchableOpacity>
        <BurgerIcon />
      </TouchableOpacity>
    </View>
  );
};

export default LoginNav;
