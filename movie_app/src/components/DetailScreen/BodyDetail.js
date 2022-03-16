import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

import Color from '../../config/utils/color';

const BodyDetail = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.genreTitle}>Genres</Text>
      <View style={styles.genreContainer}>
        <FlatList
          scrollEnabled={false}
          horizontal={true}
          data={props.movieData.genres}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.genreItemContainer}>
              <Text style={styles.genreItem}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.synopshisContainer}>
        <Text style={styles.synopshisTitle}>Synopsis</Text>
        <View style={styles.synopshisTextContainer}>
          <Text style={styles.synopshisText}>{props.movieData.overview}</Text>
        </View>
      </View>
    </View>
  );
};

export default BodyDetail;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  genreTitle: {
    backgroundColor: Color.DISABLE_BUTTON_COLOR,
    textAlign: 'center',
    padding: 8,
    borderRadius: 8,
    color: Color.TEXT_COLOR,
    fontWeight: 'bold',
    fontSize: 16,
  },
  genreContainer: {
    marginTop: 12,
    flexWrap: 'wrap',
  },
  genreItemContainer: {
    backgroundColor: Color.CONTAINER_COLOR,
    marginRight: 8,
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 10,
  },
  genreItem: {
    color: Color.TEXT_COLOR,
    fontSize: 12,
  },
  synopshisContainer: {
    marginTop: 20,
  },
  synopshisTitle: {
    backgroundColor: Color.DISABLE_BUTTON_COLOR,
    textAlign: 'center',
    padding: 8,
    borderRadius: 8,
    color: Color.TEXT_COLOR,
    fontWeight: 'bold',
    fontSize: 16,
  },
  synopshisTextContainer: {
    marginTop: 12,
  },
  synopshisText: {
    color: Color.TEXT_COLOR,
    fontSize: 12,
    textAlign: 'justify',
  },
});
