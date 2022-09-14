import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import Label from '../../components/common/typography/Label';
import CustomText from '../../components/common/typography/CustomText';
import PenIcon from '../../../assets/icons/Pen.icon';
import {styles} from './ProfileScreen.styles';

const UserDetail = ({userDetail}) => {
  return (
    <View key={userDetail.title} style={styles.userInfo}>
      <View>
        <Label>{userDetail.title}</Label>
        <View style={styles.mrgn}>
          <CustomText>{userDetail.body}</CustomText>
        </View>
      </View>
      {userDetail.icon && (
        <TouchableOpacity>
          <PenIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default UserDetail;
