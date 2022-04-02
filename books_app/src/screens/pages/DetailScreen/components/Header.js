import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { ms } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import Share from 'react-native-share';

import { BackIcon, LoveIcon, ShareIcon } from '../../../../assets';
import Color from '../../../../config/utils/color';

const Header = () => {
  const navigation = useNavigation();

  const onShare = async () => {
    const content = {
      message: 'Credits to the API : ',
      url: 'http://code.aldipee.com/api/v1/books',
    };
    await Share.open(content)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.backIconContainer}
        onPress={() => navigation.goBack()}>
        <Image source={BackIcon} style={styles.backIcon} />
      </TouchableOpacity>
      <View style={styles.interactionContainer}>
        <TouchableOpacity style={styles.loveIconContainer}>
          <Image source={LoveIcon} style={styles.loveIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareIconContainer} onPress={onShare}>
          <Image source={ShareIcon} style={styles.shareIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: ms(15),
    marginTop: ms(20),
  },
  backIcon: {
    height: ms(28),
    width: ms(28),
    tintColor: Color.DISABLE_BUTTON_COLOR,
  },
  interactionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: ms(5),
  },
  loveIcon: {
    tintColor: Color.MAIN_COLOR,
    marginRight: ms(20),
  },
  shareIcon: {
    marginRight: ms(5),
    tintColor: Color.MAIN_COLOR,
  },
});
