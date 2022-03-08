import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';

import Data from '../models/car';

const CarList = () => {
  return (
    <FlatList
      data={Data}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity style={styles.carListContainer}>
          <View style={styles.carImage}>
            <Image source={require('../assets/images/listCar.png')}></Image>
          </View>
          <View style={styles.carListInfo}>
            <Text style={styles.carTitle}>{item.title}</Text>
            <View style={styles.carInfo}>
              <View style={styles.carPeople}>
                <Image
                  source={require('../assets/images/icon/icon_people.png')}
                />
                <Text style={styles.carPeopleText}>{item.people}</Text>
              </View>
              <View style={styles.carStorage}>
                <Image
                  source={require('../assets/images/icon/icon_storage.png')}
                />
                <Text style={styles.carStorageText}>{item.storage}</Text>
              </View>
            </View>
            <Text style={styles.carPrice}>{item.price}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default CarList;

const styles = StyleSheet.create({
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
    fontSize: 14,
    fontFamily: 'Helvetica',
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
    alignItems: 'center',
  },
  carStorage: {
    flexDirection: 'row',
    marginLeft: 20,
    alignItems: 'center',
  },
  carPeopleText: {
    marginLeft: 4,
    fontFamily: 'Helvetica',
  },
  carStorageText: {
    marginLeft: 4,
    fontFamily: 'Helvetica',
  },
  carPrice: {
    color: '#5CB85F',
    fontSize: 14,
    fontFamily: 'Helvetica',
  },
});
