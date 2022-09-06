import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CameraIcon from '../../assets/icons/Camera.icon';
import {colors} from '../styles/colors';
import Label from '../components/common/typography/Label';
import CustomText from '../components/common/typography/CustomText';
import PenIcon from '../../assets/icons/Pen.icon';
import Button from '../components/common/Button';

const Profile = () => {
  const userDetails = [
    {title: 'Beneficiary nickname', body: 'Ahlam Saade', icon: <PenIcon />},
    {title: 'Beneficiary full name', body: 'Ahlam Saade'},
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
      <View style={styles.avatarWrapper}>
        <View style={styles.avatarContainer}>
          <Image
            source={require('../../assets/avatar.png')}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.icon}>
            <CameraIcon />
          </TouchableOpacity>
        </View>
        <Text style={styles.avatarLabel}>SAIB Beneficiary</Text>
        <Text style={styles.username}>Ahlam Saade</Text>
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
          <Button>Log out</Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

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
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
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
