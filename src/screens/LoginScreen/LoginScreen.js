import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../styles/colors';
import LocationIcon from '../../../assets/icons/Location.icon';
import BurgerIcon from '../../../assets/icons/Burger.icon';
import Label from '../../components/common/typography/Label';
import TickIcon from '../../../assets/icons/Tick.icon';
import EyeIcon from '../../../assets/icons/Eye.icon';
import EyeClosedIcon from '../../../assets/icons/EyeClosed.icon';
import {USER_NAME, PASSWORD} from '@env';
import {useDispatch} from 'react-redux';
import {setAuth} from '../../features/auth/authSlice';
import {useNavigation} from '@react-navigation/native';
import LoginFooter from './LoginFooter';

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isSecure, setIsSecure] = useState(true);

  const handleChange = (value, type) => {
    if (type === 'username') {
      setUserName(value);
    } else {
      setPassword(value);
    }
  };

  const handleSubmit = () => {
    if (userName === USER_NAME && password === PASSWORD) {
      dispatch(setAuth({username: userName, password}));
    }
  };

  const handleIsSecure = () => {
    setIsSecure(prev => !prev);
  };

  const openMapScreen = () => {
    navigation.navigate('Map');
  };

  const requestLocationPermission = async () => {
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
        openMapScreen();
        console.log('You can use the location');
      } else {
        console.log('location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" />
      <View style={styles.navbar}>
        <TouchableOpacity
          onPress={
            Platform.OS === 'ios' ? openMapScreen : requestLocationPermission
          }>
          <LocationIcon />
        </TouchableOpacity>
        <TouchableOpacity>
          <BurgerIcon />
        </TouchableOpacity>
      </View>
      <Text style={styles.header}>Welcome to SAIB</Text>
      <View style={styles.inputContainer}>
        <Label color="crude30">Username</Label>
        <TextInput
          style={styles.input}
          placeholder="e.g. itechart"
          placeholderTextColor={colors.crude50}
          value={userName}
          onChangeText={v => handleChange(v, 'username')}
        />
        {userName.length > 3 && (
          <View style={styles.icon}>
            <TickIcon />
          </View>
        )}
      </View>
      <View style={styles.inputContainer}>
        <Label color="crude30">Password</Label>
        <TextInput
          style={styles.input}
          placeholder="e.g. 123456"
          placeholderTextColor={colors.crude50}
          value={password}
          onChangeText={handleChange}
          secureTextEntry={isSecure}
        />
        <TouchableOpacity onPress={handleIsSecure} style={styles.icon}>
          {isSecure ? <EyeIcon /> : <EyeClosedIcon />}
        </TouchableOpacity>
      </View>
      <LoginFooter handleSubmit={handleSubmit} />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.black,
  },
  navbar: {
    marginTop: Platform.OS === 'ios' ? 5 : 25,
    marginHorizontal: 23,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    color: 'white',
    fontSize: 33,
    lineHeight: 36,
    marginHorizontal: 33,
    marginBottom: 46,
    marginTop: 70,
    textAlign: 'center',
  },
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
  icon: {
    position: 'absolute',
    top: 24,
    right: 16,
  },
});
