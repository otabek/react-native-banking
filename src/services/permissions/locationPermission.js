import {PermissionsAndroid} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

export const getCurrentPosition = navigateToMap => {
  Geolocation.getCurrentPosition(navigateToMap);
};

export const requestLocationPermission = async navigateToMap => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Allow “Saudi Investment Bank” to access your location?',
        message:
          'Your current location will be displayed ' +
          'on the map and used for directions, ' +
          'nearby search results and estimated ' +
          'travel times.',
        buttonNeutral: 'Allow Once',
        buttonNegative: 'Don’t Allow',
        buttonPositive: 'Allow While Using App',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      navigateToMap();
      console.log('You can use the location');
    } else {
      console.log('location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};
