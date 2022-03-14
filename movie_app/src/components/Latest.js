import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Data from '../models/movie';
import Color from '../config/utils/color';

const Latest = () => {
  const navigation = useNavigation();

  function changeDate(date) {
    let splitDate = date.split('-');

    let day = splitDate[2];
    let month = splitDate[1];
    let year = splitDate[0];

    return day + '-' + month + '-' + year;
  }

  function GenresGenerator(props) {
    return (
      <View style={{flexDirection: 'row'}}>
        <FlatList
          data={props.value}
          key={item => item.id}
          renderItem={({item}) => (
            <View style={{backgroundColor: 'green'}}>
              <Text style={{color: Color.TEXT_COLOR}}>{item.name}</Text>
            </View>
          )}
        />
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <Text style={{color: 'white', marginTop: 12, marginLeft: 16}}>
        Latest Updates
      </Text>
      <View style={{marginTop: 24, marginBottom: 112}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View
              style={{
                backgroundColor: Color.CONTAINER_COLOR,
                marginHorizontal: 16,
                marginBottom: 14,
                padding: 16,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <Image
                source={{uri: item.poster_path}}
                style={{height: 100, width: 70, borderRadius: 10}}
              />
              <View style={{marginLeft: 16}}>
                <Text style={{color: Color.TEXT_COLOR}}>{item.title}</Text>
                <Text style={{color: Color.TEXT_COLOR}}>
                  {changeDate(item.release_date)}
                </Text>
                <Text style={{color: Color.TEXT_COLOR}}>
                  {item.vote_average}
                </Text>
                <View>
                  <Text style={{color: Color.TEXT_COLOR}}>
                    {item.genre_ids}
                  </Text>
                </View>
                <View style={{alignItems: 'flex-start'}}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Detail')}
                    style={{backgroundColor: Color.ACTIVE_BUTTON_COLOR}}>
                    <Text>Show More</Text>
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

const styles = StyleSheet.create({});
