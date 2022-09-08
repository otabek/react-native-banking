import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../styles/colors';
import CustomText from '../../components/common/typography/CustomText';
import Button from '../../components/common/Button';
import CopyIcon from '../../../assets/icons/Copy.icon';

const ATMCard = ({isLastItem}) => {
  const marginRight = isLastItem ? 16 : 0;

  return (
    <View style={[styles.container, {marginRight}]}>
      <View style={styles.textContainer}>
        <View style={styles.name}>
          <CustomText>Aljaffal Center Ruh</CustomText>
        </View>
        <CustomText>Al Jaffal, Riyadh</CustomText>
      </View>
      <Button height={44} paddingVertical={12}>
        Set an appointment
      </Button>
      <TouchableOpacity style={styles.icon}>
        <CopyIcon />
      </TouchableOpacity>
    </View>
  );
};

export default ATMCard;

const styles = StyleSheet.create({
  container: {
    width: 312,
    height: 172,
    marginLeft: 16,
    marginBottom: 8,
    borderRadius: 10,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
    padding: 16,
  },
  textContainer: {
    marginTop: 4,
    marginBottom: 48,
  },
  name: {
    marginBottom: 4,
  },
  icon: {
    position: 'absolute',
    top: 15,
    right: 14,
  },
});
