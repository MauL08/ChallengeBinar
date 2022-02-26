import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image></Image>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#091B6F',
  },
  image: {
    justifyContent: 'flex-end',
  },
});
