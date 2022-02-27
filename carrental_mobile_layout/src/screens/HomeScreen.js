import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Data from '../models/carList';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
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
      <View style={styles.bannerContainer}>
        <View style={styles.bannerFlowContainer}>
          <Text style={styles.bannerText}>Sewa Mobil Berkualitas</Text>
          <Text style={styles.bannerText}>di kawasanmu</Text>
          <TouchableOpacity style={styles.bannerButton}>
            <Text style={styles.bannerButtonText}>Sewa Mobil</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/bannerCar.png')}
            style={styles.imageBanner}></Image>
        </View>
      </View>
      <View style={styles.navIconContainer}>
        <TouchableOpacity style={styles.navIcon}>
          <Image
            source={require('../assets/images/icon/icon_truck.png')}></Image>
          <Text style={styles.navIconText}>Sewa Mobil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navIcon}>
          <Image source={require('../assets/images/icon/icon_box.png')}></Image>
          <Text style={styles.navIconText}>Oleh-Oleh</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navIcon}>
          <Image
            source={require('../assets/images/icon/icon_hotel.png')}></Image>
          <Text style={styles.navIconText}>Penginapan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navIcon}>
          <Image
            source={require('../assets/images/icon/icon_vacation.png')}></Image>
          <Text style={styles.navIconText}>Wisata</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Daftar Mobil Pilihan</Text>
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
          );
        })}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
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
    fontWeight: '300',
  },
  location: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: 'bold',
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
  bannerContainer: {
    backgroundColor: '#091B6F',
    borderRadius: 8,
    marginHorizontal: 16,
    paddingTop: 24,
    paddingLeft: 24,
    marginTop: -74,
    flexDirection: 'row',
  },
  bannerFlowContainer: {
    justifyContent: 'flex-start',
    alignItems: 'baseline',
  },
  bannerText: {
    color: 'white',
    fontSize: 16,
  },
  bannerButton: {
    backgroundColor: '#5CB85F',
    marginTop: 16,
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  bannerButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 18,
  },
  imageBanner: {
    width: '100%',
    borderBottomRightRadius: 8,
  },
  navIconContainer: {
    marginTop: 32,
    marginHorizontal: 20,
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navIcon: {
    alignItems: 'center',
  },
  navIconText: {
    fontSize: 12,
    marginTop: 8,
  },
  listContainer: {
    marginHorizontal: 16,
  },
  listTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  carListContainer: {
    paddingVertical: 16,
    paddingLeft: 16,
    marginBottom: 16,
    backgroundColor: 'white',
    borderRadius: 4,
    flexDirection: 'row',
    elevation: 4,
  },
  carImage: {
    marginTop: 8,
  },
  carTitle: {
    fontSize: 14,
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
  },
  carStorageText: {
    marginLeft: 4,
  },
  carPrice: {
    color: '#5CB85F',
    fontSize: 14,
  },
});
