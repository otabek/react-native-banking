import {
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
import {colors} from '../styles/colors';
import LocationIcon from '../../assets/icons/Location.icon';
import BurgerIcon from '../../assets/icons/Burger.icon';
import Label from '../components/common/typography/Label';
import TickIcon from '../../assets/icons/Tick.icon';
import EyeIcon from '../../assets/icons/Eye.icon';
import EyeClosedIcon from '../../assets/icons/EyeClosed.icon';
import Button from '../components/common/Button';
import CustomText from '../components/common/typography/CustomText';
import {USER_NAME, PASSWORD} from '@env';
import {useDispatch} from 'react-redux';
import {setAuth} from '../features/auth/authSlice';
import {useNavigation} from '@react-navigation/native';

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

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" />
      <View style={styles.navbar}>
        <TouchableOpacity onPress={openMapScreen}>
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
