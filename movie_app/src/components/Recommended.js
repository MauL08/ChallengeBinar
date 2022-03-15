import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import Data from '../models/movie';
import Color from '../config/utils/color';
import {RateIcon} from '../assets/index';

const Recommended = () => {
  return (
    <View>
      <Text style={styles.pageTitle}>Recommended</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={Data}
        keyExtractor={item => item.id}
        horizontal={true}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.posterContainer}>
            <Image
              style={styles.posterImage}
              source={{uri: item.poster_path}}
            />
            <Text style={styles.posterText}>{item.title}</Text>
            <View style={styles.ratingContainer}>
              <Image source={RateIcon} style={styles.rateIcon} />
              <Text style={styles.ratingText}>{item.vote_average}/10</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Recommended;

const styles = StyleSheet.create({
  pageTitle: {
    color: Color.TEXT_COLOR,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    marginLeft: 16,
  },
  posterContainer: {
    marginHorizontal: 12,
    marginTop: 16,
    marginBottom: 24,
    width: 150,
  },
  posterImage: {
    height: 220,
    borderRadius: 10,
  },
  posterText: {
    color: Color.TEXT_COLOR,
    fontSize: 12,
    marginTop: 12,
    fontWeight: 'bold',
  },
  ratingContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rateIcon: {
    marginRight: 5,
  },
  ratingText: {
    color: Color.TEXT_COLOR,
    fontSize: 12,
  },
});
