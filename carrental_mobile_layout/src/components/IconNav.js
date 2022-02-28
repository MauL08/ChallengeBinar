import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const IconNav = () => {
  return (
    <View style={styles.navIconContainer}>
      <TouchableOpacity style={styles.navIcon}>
        <Image source={require('../assets/images/icon/icon_truck.png')}></Image>
        <Text style={styles.navIconText}>Sewa Mobil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navIcon}>
        <Image source={require('../assets/images/icon/icon_box.png')}></Image>
        <Text style={styles.navIconText}>Oleh-Oleh</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navIcon}>
        <Image source={require('../assets/images/icon/icon_hotel.png')}></Image>
        <Text style={styles.navIconText}>Penginapan</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navIcon}>
        <Image
          source={require('../assets/images/icon/icon_vacation.png')}></Image>
        <Text style={styles.navIconText}>Wisata</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IconNav;

const styles = StyleSheet.create({
  navIconContainer: {
    marginTop: 32,
    marginHorizontal: 20,
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navIcon: {
    alignItems: 'center',
  },
  navIconText: {
    fontSize: 12,
    marginTop: 8,
    fontFamily: 'Helvetica',
  },
});
