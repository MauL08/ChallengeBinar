import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import Data from '../../models/batman';
import Color from '../../config/utils/color';

const DetailBanner = () => {
  return (
    <View style={styles.detailContainer}>
      <Image source={{uri: Data.poster_path}} style={styles.imagePoster} />
      <View style={styles.infoContainer}>
        <Text style={{color: Color.ACTIVE_BUTTON_COLOR}}>Judul</Text>
        <Text style={{color: Color.ACTIVE_BUTTON_COLOR}}>Tagline</Text>
        <Text style={{color: Color.ACTIVE_BUTTON_COLOR}}>Status</Text>
        <Text style={{color: Color.ACTIVE_BUTTON_COLOR}}>Release Date</Text>
        <Text style={{color: Color.ACTIVE_BUTTON_COLOR}}>Vote Average</Text>
        <Text style={{color: Color.ACTIVE_BUTTON_COLOR}}>Runtime</Text>
      </View>
    </View>
  );
};

export default DetailBanner;

const styles = StyleSheet.create({
  detailContainer: {
    backgroundColor: Color.CONTAINER_COLOR,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 4,
    marginHorizontal: 24,
    marginTop: -64,
  },
  imagePoster: {
    height: 150,
    width: 90,
    borderRadius: 10,
  },
  infoContainer: {
    marginLeft: 16,
  },
});
