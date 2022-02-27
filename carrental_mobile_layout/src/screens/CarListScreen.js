import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import Data from '../models/carList';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CarListScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>Daftar Mobil</Text>
      {Data.map(item => {
        return (
          <TouchableOpacity style={styles.carListContainer} key={item.id}>
            <View style={styles.carImage}>
              <Image source={require('../assets/images/listCar.png')}></Image>
            </View>
            <View style={styles.carListInfo}>
              <Text style={styles.carTitle}>{item.title}</Text>
              <View style={styles.carInfo}>
                <View style={styles.carPeople}>
                  <Ionicons name="ios-information-circle" />
                  <Text>{item.people}</Text>
                </View>
                <View style={styles.carStorage}>
                  <Ionicons name="ios-information-circle" />
                  <Text>{item.storage}</Text>
                </View>
              </View>
              <Text style={styles.carPrice}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
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
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 18,
    marginLeft: 16,
    marginBottom: 26,
  },
  carListContainer: {
    marginBottom: 16,
    marginHorizontal: 16,
    paddingVertical: 16,
    paddingLeft: 16,
    backgroundColor: 'white',
    borderRadius: 4,
    flexDirection: 'row',
    elevation: 3,
  },
  carImage: {
    marginTop: 8,
  },
  carTitle: {
    fontSize: 16,
  },
  carListInfo: {
    marginLeft: 16,
  },
  carInfo: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 8,
  },
  carPeople: {
    flexDirection: 'row',
  },
  carStorage: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  carPrice: {
    color: '#5CB85F',
    fontSize: 16,
  },
});
