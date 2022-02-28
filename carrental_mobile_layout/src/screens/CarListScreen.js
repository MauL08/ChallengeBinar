import {StyleSheet, Text, ScrollView} from 'react-native';
import React from 'react';
import CarList from '../components/CarList';

const CarListScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>Daftar Mobil</Text>
      <CarList />
    </ScrollView>
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
