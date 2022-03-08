import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
} from 'react-native';
import React from 'react';
import {useIsFocused} from '@react-navigation/native';

function UserStatusBar() {
  const focus = useIsFocused();

  return focus ? (
    <StatusBar backgroundColor="white" barStyle="dark-content" />
  ) : null;
}

const UserScreen = () => {
  return (
    <View style={styles.container}>
      <UserStatusBar />
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
    fontSize: 14,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    color: 'black',
    marginTop: 18,
    marginLeft: 16,
  },
  semiContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
  },
  text: {
    marginTop: 16,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Helvetica',
    fontWeight: '300',
  },
  regButton: {
    backgroundColor: '#5CB85F',
    marginTop: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 2,
  },
  regButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Helvetica',
  },
});
