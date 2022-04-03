import { Text, View, TextInput, Image } from 'react-native';
import React from 'react';
import { SearchIcon, NextArrowIcon } from '../../../../assets';
import { styles } from '../styles/welcomeStyle';

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
