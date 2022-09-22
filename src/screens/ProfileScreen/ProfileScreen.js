import React, {useMemo} from 'react';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import PenIcon from '../../../assets/icons/Pen.icon';
import Button from '../../components/common/Button';
import {
  resetAuth,
  selectUserName,
  selectAvatar,
} from '../../features/auth/authSlice';
import {styles} from './ProfileScreen.styles';
import Avatar from '../../components/common/Avatar';
import UserDetail from './UserDetail';
import BankDetail from './BankDetail';
import {bankDetails} from '../../constants/data';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const photoURI = useSelector(selectAvatar);

  const handleLogout = () => {
    dispatch(resetAuth());
  };

  const userDetails = useMemo(
    () => [
      {title: 'Beneficiary nickname', body: userName, icon: <PenIcon />},
      {title: 'Beneficiary full name', body: userName},
      {title: 'Address', body: 'SAMA, Head Office P.O. BOX 2992 Riyadh 11169'},
    ],
    [userName],
  );

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <Avatar photoURI={photoURI} userName={userName} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topBorder} />
        {userDetails.map(userDetail => (
          <UserDetail key={userDetail.title} userDetail={userDetail} />
        ))}
        <Text style={styles.bankHeader}>Beneficiary bank details</Text>
        <View style={styles.topBorder} />
        {bankDetails.map(bankDetail => (
          <BankDetail key={bankDetail.title} bankDetail={bankDetail} />
        ))}
        <View style={styles.btn}>
          <Button onPress={handleLogout}>Log out</Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
