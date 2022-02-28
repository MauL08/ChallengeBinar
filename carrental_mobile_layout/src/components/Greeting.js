import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Greeting = () => {
  return (
    <View style={styles.userContainer}>
      <View style={styles.userGreeting}>
        <Text style={styles.greet}>Hi, Akbar</Text>
        <Text style={styles.location}>Jakarta, Indonesia</Text>
      </View>
      <View style={styles.userIconContainer}>
        <Image
          source={require('../assets/images/user.jpg')}
          style={styles.userIcon}></Image>
      </View>
    </View>
  );
};

export default Greeting;

const styles = StyleSheet.create({
  userContainer: {
    backgroundColor: '#D3D9FD',
    height: 146,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userGreeting: {
    marginTop: 16,
    marginLeft: 16,
  },
  greet: {
    fontSize: 12,
    fontFamily: 'Helvetica',
    fontWeight: '300',
  },
  location: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
  userIconContainer: {
    marginTop: 23,
    marginRight: 16,
  },
  userIcon: {
    width: 28,
    height: 28,
    borderRadius: 20,
  },
});
