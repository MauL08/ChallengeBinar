import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const HomeBanner = () => {
  return (
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
  );
};

export default HomeBanner;

const styles = StyleSheet.create({
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
    fontFamily: 'Helvetica',
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
    fontFamily: 'Helvetica',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 18,
  },
  imageBanner: {
    width: '100%',
    borderBottomRightRadius: 8,
  },
});
