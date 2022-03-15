import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

// Models
import Data from '../models/movie';
import ListGenre from '../models/genre';

// Utils
import Color from '../config/utils/color';
import * as Date from '../config/utils/changeDate';

// Assets
import {RateIcon} from '../assets/index';

const Latest = () => {
  const navigation = useNavigation();

  const Genres = props => {
    let keys = props.keys;
    let list = props.list;

    return keys.map((key, index) => {
      let genre = Object.keys(list).find(data => list[data] === key);

      return (
        <View style={styles.genreSemiContainer} key={index}>
          <Text style={styles.genreText}>{genre}</Text>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Latest Updates</Text>
      <View style={styles.listParent}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.listContainer}>
              <Image
                source={{uri: item.poster_path}}
                style={styles.imagePoster}
              />
              <View style={styles.detailContainer}>
                <Text style={styles.detailTitle}>{item.title}</Text>
                <Text style={styles.detailDate}>
                  Released on {Date.changeDate(item.release_date)}
                </Text>
                <View style={styles.ratingContainer}>
                  <Image source={RateIcon} style={styles.ratingIcon} />
                  <Text style={styles.ratingText}>{item.vote_average}/10</Text>
                </View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={styles.genreContainer}>
                  <Genres keys={item.genre_ids} list={ListGenre} />
                </ScrollView>
                <View style={styles.showButtonContainer}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Detail')}
                    style={styles.showButton}>
                    <Text style={styles.showButtonText}>Show More</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Latest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageTitle: {
    color: Color.TEXT_COLOR,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  listParent: {
    marginTop: 20,
    marginHorizontal: 16,
    marginBottom: 108,
  },
  listContainer: {
    backgroundColor: Color.CONTAINER_COLOR,
    marginBottom: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 2,
  },
  imagePoster: {
    height: 120,
    width: 70,
    borderRadius: 10,
  },
  detailContainer: {
    width: 220,
    marginLeft: 16,
  },
  detailTitle: {
    color: Color.TEXT_COLOR,
    fontSize: 14,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  detailDate: {
    color: Color.TEXT_COLOR,
    fontSize: 12,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingIcon: {
    marginRight: 3,
  },
  ratingText: {
    color: Color.TEXT_COLOR,
    fontSize: 12,
  },
  genreContainer: {
    flexDirection: 'row',
    marginTop: 6,
  },
  genreSemiContainer: {
    backgroundColor: Color.DISABLE_BUTTON_COLOR,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  genreText: {
    color: Color.TEXT_COLOR,
    fontSize: 10,
  },
  showButtonContainer: {
    alignItems: 'flex-start',
    marginTop: 8,
  },
  showButton: {
    backgroundColor: Color.ACTIVE_BUTTON_COLOR,
    padding: 5,
    borderRadius: 6,
  },
  showButtonText: {
    color: Color.TEXT_COLOR,
    fontWeight: 'bold',
    fontSize: 12,
  },
});
