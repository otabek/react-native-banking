import {TouchableOpacity, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import Input from '../../components/common/inputs/Input';
import TickIcon from '../../../assets/icons/Tick.icon';
import EyeIcon from '../../../assets/icons/Eye.icon';
import EyeClosedIcon from '../../../assets/icons/EyeClosed.icon';
import {styles} from './LoginScreen.styles';

const LoginInput = ({userName, password, setUserName, setPassword}) => {
  const [isSecure, setIsSecure] = useState(true);

  const handleUserInput = useCallback(
    value => {
      setUserName(value);
    },
    [setUserName],
  );

  const handlePassword = useCallback(
    value => {
      setPassword(value);
    },
    [setPassword],
  );

  const handleIsSecure = useCallback(() => {
    setIsSecure(prev => !prev);
  }, [setIsSecure]);

  return (
    <>
      <Input
        label="Username"
        placeholder="e.g. itechart"
        value={userName}
        handleChange={handleUserInput}
        customIcon={
          userName.length > 3 && (
            <View style={styles.icon}>
              <TickIcon />
            </View>
          )
        }
      />
      <Input
        label="Password"
        placeholder="e.g. 123456"
        value={password}
        handleChange={handlePassword}
        isSecure={isSecure}
        customIcon={
          <TouchableOpacity onPress={handleIsSecure} style={styles.icon}>
            {isSecure ? <EyeIcon /> : <EyeClosedIcon />}
          </TouchableOpacity>
        }
      />
    </>
  );
};

export default LoginInput;
