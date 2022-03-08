import {StyleSheet, Text, ScrollView, StatusBar, View} from 'react-native';
import React from 'react';
import {useIsFocused} from '@react-navigation/native';

import CarList from '../components/CarList';

function CarListStatusBar() {
  const focus = useIsFocused();

  return focus ? (
    <StatusBar backgroundColor="white" barStyle="dark-content" />
  ) : null;
}

const CarListScreen = () => {
  return (
    <View style={styles.container}>
      <CarListStatusBar />
      <Text style={styles.screenTitle}>Daftar Mobil</Text>
      <CarList />
    </View>
  );
};

export default CarListScreen;

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
    marginBottom: 26,
  },
});
