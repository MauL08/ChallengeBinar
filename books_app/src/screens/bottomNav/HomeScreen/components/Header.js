import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { ms } from 'react-native-size-matters';

import { AccountIcon, ListIcon } from '../../../../assets';
import Color from '../../../../config/utils/color';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={ListIcon} style={styles.images} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={AccountIcon} style={styles.imagesUser} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: ms(18),
    marginHorizontal: ms(18),
    marginBottom: ms(15),
  },
  images: {
    tintColor: Color.DISABLE_BUTTON_COLOR,
    height: ms(22),
    width: ms(22),
  },
  imagesUser: {
    tintColor: Color.MAIN_COLOR,
    height: ms(30),
    width: ms(30),
  },
});
