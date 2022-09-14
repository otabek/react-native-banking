import {View} from 'react-native';
import React from 'react';
import Label from '../../components/common/typography/Label';
import CustomText from '../../components/common/typography/CustomText';
import {styles} from './ProfileScreen.styles';

const BankDetail = ({bankDetail}) => (
  <View key={bankDetail.title} style={styles.userInfo}>
    <View>
      <Label>{bankDetail.title}</Label>
      <View style={styles.mrgn}>
        <CustomText>{bankDetail.body}</CustomText>
      </View>
    </View>
  </View>
);

export default BankDetail;
