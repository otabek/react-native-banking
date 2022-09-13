import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomText from '../../components/common/typography/CustomText';
import Button from '../../components/common/Button';
import CopyIcon from '../../../assets/icons/Copy.icon';
import {styles} from './MapScreen.styles';

const ATMCard = ({isLastItem}) => {
  const marginRight = isLastItem ? 16 : 0;

  return (
    <View style={[styles.atmWrapper, {marginRight}]}>
      <View style={styles.textContainer}>
        <View style={styles.name}>
          <CustomText>Aljaffal Center Ruh</CustomText>
        </View>
        <CustomText>Al Jaffal, Riyadh</CustomText>
      </View>
      <Button height={44} paddingVertical={12}>
        Set an appointment
      </Button>
      <TouchableOpacity style={styles.copyIcon}>
        <CopyIcon />
      </TouchableOpacity>
    </View>
  );
};

export default ATMCard;
