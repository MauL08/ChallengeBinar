import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Main');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>BCR</Text>
        <Text style={styles.text}>Binar Car Rental</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/splashCar.png')}
          style={styles.image}></Image>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#091B6F',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    width: '100%',
  },
});
