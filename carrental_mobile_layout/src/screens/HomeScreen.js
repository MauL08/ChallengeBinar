import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {useIsFocused} from '@react-navigation/native';

import CarList from '../components/CarList';
import HomeBanner from '../components/HomeBanner';
import IconNav from '../components/IconNav';
import Greeting from '../components/Greeting';

function HomeStatusBar() {
  const focus = useIsFocused();

  return focus ? (
    <StatusBar backgroundColor="#D3D9FD" barStyle="dark-content" />
  ) : null;
}

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeStatusBar />
      <Greeting />
      <HomeBanner />
      <IconNav />
      <Text style={styles.listTitle}>Daftar Mobil Pilihan</Text>
      <CarList />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  listTitle: {
    marginHorizontal: 16,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    marginBottom: 16,
  },
});
