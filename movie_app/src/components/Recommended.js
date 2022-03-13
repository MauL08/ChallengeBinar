import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';

import Data from '../models/movie';

const Recommended = () => {
  return (
    <View>
      <Text style={{color: 'white', marginTop: 16, marginLeft: 16}}>
        Recommended
      </Text>
      <FlatList
        data={Data}
        keyExtractor={item => item.id}
        horizontal={true}
        renderItem={({item}) => (
          <View>
            <Image
              style={{
                width: 150,
                height: 220,
                marginHorizontal: 12,
                marginVertical: 20,
                borderRadius: 10,
              }}
              source={{uri: item.poster_path}}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Recommended;

const styles = StyleSheet.create({});
