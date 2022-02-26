import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const UserScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/images/park.png')}></Image>
      <Text style={styles.text}>
        Upss kamu belum memiliki akun. Mulai buat akun agar transaksi di BCR
        lebih mudah
      </Text>
      <TouchableOpacity style={styles.regButton}>
        <Text style={styles.regButtonText}>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
