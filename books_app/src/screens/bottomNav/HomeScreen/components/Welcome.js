import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import React from 'react';
import { ms } from 'react-native-size-matters';

import { SearchIcon, NextArrowIcon } from '../../../../assets';
import Color from '../../../../config/utils/color';

const Welcome = () => {
  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.welcomeText}>Welcome Back, USER!</Text>
      <View style={styles.searchBar}>
        <View style={styles.searchSection}>
          <Image source={SearchIcon} style={styles.searchIcon} />
          <TextInput placeholder="Search Books" style={styles.searchText} />
        </View>
        <Image source={NextArrowIcon} style={styles.nextIcon} />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  welcomeContainer: {
    marginHorizontal: ms(18),
  },
  welcomeText: {
    letterSpacing: ms(1),
    fontSize: ms(14),
    fontWeight: '500',
    marginBottom: ms(2),
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: ms(3),
    borderRadius: ms(10),
    borderColor: '#D8D8D8',
    backgroundColor: '#D8D8D8',
    height: ms(50),
    padding: ms(10),
    marginTop: ms(15),
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    tintColor: Color.NON_ACTIVE_COLOR,
  },
  searchText: {
    marginLeft: ms(4),
    fontSize: ms(14),
    height: ms(50),
    fontWeight: '500',
    width: ms(250),
  },
  nextIcon: {
    tintColor: Color.MAIN_COLOR,
    marginRight: ms(3),
  },
});
