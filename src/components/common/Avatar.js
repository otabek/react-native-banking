import React, {useCallback} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import CameraIcon from '../../../assets/icons/Camera.icon';
import {setAvatar} from '../../features/auth/authSlice';
import {styles} from '../../screens/ProfileScreen/ProfileScreen.styles';

const Avatar = ({photoURI, userName}) => {
  const dispatch = useDispatch();

  const selectFile = useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra: false,
    };

    launchImageLibrary(options, res => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
        return;
      }
      dispatch(setAvatar(res.assets[0].uri));
    });
  }, [dispatch]);

  return (
    <View style={styles.avatarWrapper}>
      <TouchableOpacity onPress={selectFile} style={styles.avatarContainer}>
        <Image
          resizeMode="cover"
          resizeMethod="scale"
          source={
            photoURI ? {uri: photoURI} : require('../../../assets/avatar.png')
          }
          style={photoURI ? styles.avatar : styles.avatarPng}
        />
        <View style={styles.icon}>
          <CameraIcon />
        </View>
      </TouchableOpacity>
      <Text style={styles.avatarLabel}>SAIB Beneficiary</Text>
      <Text style={styles.username}>{userName}</Text>
    </View>
  );
};

export default Avatar;
