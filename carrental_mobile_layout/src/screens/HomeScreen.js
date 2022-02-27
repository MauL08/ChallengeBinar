import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
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
        <FlatList></FlatList>
      </View>
    </SafeAreaView>
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
    padding: 16,
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  greet: {
    fontSize: 14,
  },
  location: {
    marginTop: 4,
    fontSize: 18,
    fontWeight: 'bold',
  },
  userGreeting: {
    marginTop: 16,
  },
  userIconContainer: {
    marginTop: 23,
  },
  userIcon: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  bannerContainer: {
    backgroundColor: '#091B6F',
    borderRadius: 8,
    marginHorizontal: 16,
    paddingTop: 24,
    paddingLeft: 24,
    marginTop: -80,
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
    paddingTop: 32,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navIcon: {
    alignItems: 'center',
  },
  navIconText: {
    fontSize: 12,
    paddingTop: 8,
  },
  listContainer: {
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  listTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom: 16,
  },
});
