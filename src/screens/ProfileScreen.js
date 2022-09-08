import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {launchImageLibrary} from 'react-native-image-picker';
import CameraIcon from '../../assets/icons/Camera.icon';
import PenIcon from '../../assets/icons/Pen.icon';
import {colors} from '../styles/colors';
import Label from '../components/common/typography/Label';
import CustomText from '../components/common/typography/CustomText';
import Button from '../components/common/Button';
import {
  resetAuth,
  selectUsername,
  selectAvatar,
  setAvatar,
} from '../features/auth/authSlice';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUsername);
  const photoURI = useSelector(selectAvatar);

  const handleLogout = () => {
    dispatch(resetAuth());
  };

  const selectFile = () => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra: false,
    };

    launchImageLibrary(options, res => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
      } else {
        dispatch(setAvatar(res.assets[0].uri));
      }
    });
  };

  const userDetails = [
    {title: 'Beneficiary nickname', body: userName, icon: <PenIcon />},
    {title: 'Beneficiary full name', body: userName},
    {title: 'Address', body: 'SAMA, Head Office P.O. BOX 2992 Riyadh 11169'},
  ];

  const bankDetails = [
    {title: 'Country of beneficiary’s bank', body: 'Saudi Arabia'},
    {title: 'Currency', body: 'SAR'},
    {title: 'Recipient account number', body: 'SA03 8000 0000 6080 1016 5463'},
    {title: 'Bank', body: 'Saudi Arabia - SAIB Bank'},
  ];

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.avatarWrapper}>
        <TouchableOpacity onPress={selectFile} style={styles.avatarContainer}>
          <Image
            resizeMode="cover"
            resizeMethod="scale"
            source={
              photoURI ? {uri: photoURI} : require('../../assets/avatar.png')
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topBorder} />
        {userDetails.map(item => (
          <View key={item.title} style={styles.userInfo}>
            <View>
              <Label>{item.title}</Label>
              <View style={styles.mrgn}>
                <CustomText>{item.body}</CustomText>
              </View>
            </View>
            {item.icon && (
              <TouchableOpacity>
                <PenIcon />
              </TouchableOpacity>
            )}
          </View>
        ))}
        <Text style={styles.bankHeader}>Beneficiary bank details</Text>
        <View style={styles.topBorder} />
        {bankDetails.map(item => (
          <View key={item.title} style={styles.userInfo}>
            <View>
              <Label>{item.title}</Label>
              <View style={styles.mrgn}>
                <CustomText>{item.body}</CustomText>
              </View>
            </View>
          </View>
        ))}
        <View style={styles.btn}>
          <Button onPress={handleLogout}>Log out</Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginHorizontal: 16,
  },
  avatarWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 120,
    height: 120,
    marginTop: 103,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(21, 23, 35, 0.1)',
    borderRadius: 60,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  avatarPng: {
    width: 100,
    height: 100,
  },
  icon: {
    position: 'absolute',
    bottom: 3,
    right: 4,
    width: 28,
    height: 28,
    backgroundColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  avatarLabel: {
    marginTop: 20,
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.2,
    textTransform: 'uppercase',
    color: colors.crude60,
  },
  username: {
    marginTop: 8.5,
    marginBottom: 36,
    fontSize: 21,
    lineHeight: 24,
    color: colors.black,
  },
  userInfo: {
    borderColor: colors.crude90,
    borderBottomWidth: 1,
    paddingVertical: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 4,
  },
  topBorder: {
    borderColor: colors.crude90,
    borderTopWidth: 1,
  },
  mrgn: {
    marginTop: 4,
  },
  bankHeader: {
    marginTop: 24,
    marginBottom: 12,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    color: colors.black,
  },
  btn: {
    marginTop: 26,
    marginBottom: 102,
  },
});
