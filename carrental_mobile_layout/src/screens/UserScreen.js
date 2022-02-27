import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';

const UserScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Akun</Text>
      <View style={styles.semiContainer}>
        <Image source={require('../assets/images/park.png')}></Image>
        <Text style={styles.text}>
          Upss kamu belum memiliki akun. Mulai buat akun agar transaksi di BCR
          lebih mudah
        </Text>
        <TouchableOpacity style={styles.regButton}>
          <Text style={styles.regButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  screenTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 18,
    marginLeft: 16,
  },
  semiContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 16,
    textAlign: 'center',
  },
  regButton: {
    backgroundColor: '#5CB85F',
    marginTop: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 5,
  },
  regButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
