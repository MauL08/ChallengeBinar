import { TouchableOpacity, View, Image } from 'react-native';
import React from 'react';

import { styles } from '../styles/headerStyle';
import { AccountIcon, ListIcon } from '../../../../assets';

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
