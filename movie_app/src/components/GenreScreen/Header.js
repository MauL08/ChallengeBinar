import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

import Color from '../../config/utils/color';
import {BackIcon} from '../../assets';

const Header = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={BackIcon} style={styles.iconStyle} />
      </TouchableOpacity>
      <Text style={styles.genreText}>GENRE INI ADALAH</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(16),
    marginTop: moderateScale(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    alignItems: 'flex-start',
    tintColor: Color.ACTIVE_BUTTON_COLOR,
  },
  genreText: {
    color: Color.ACTIVE_BUTTON_COLOR,
    fontWeight: 'bold',
  },
});
