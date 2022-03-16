import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';

import Color from '../../config/utils/color';
import Data from '../../models/batman';

const ActorList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.castListTitle}>Actor / Artist</Text>
      <View style={styles.castMainContainer}>
        <FlatList
          scrollEnabled={false}
          numColumns={3}
          data={Data.credits.cast}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item, index}) => (
            <View style={styles.castContainer}>
              <Image
                source={{uri: item.profile_path}}
                style={styles.castPicture}
              />
              <View style={styles.castNameContainer}>
                <Text style={styles.castName}>{item.name}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default ActorList;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginHorizontal: 20,
  },
  castListTitle: {
    backgroundColor: Color.DISABLE_BUTTON_COLOR,
    textAlign: 'center',
    padding: 8,
    borderRadius: 8,
    color: Color.TEXT_COLOR,
    fontWeight: 'bold',
    fontSize: 16,
  },
  castMainContainer: {
    marginTop: 12,
  },
  castContainer: {
    backgroundColor: Color.DISABLE_BUTTON_COLOR,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    marginRight: 8,
    padding: 6,
  },
  castPicture: {
    height: 160,
    width: 100,
    borderRadius: 4,
  },
  castNameContainer: {
    backgroundColor: Color.CONTAINER_COLOR,
    borderRadius: 4,
    padding: 2,
    width: 100,
    marginTop: 5,
  },
  castName: {
    color: Color.TEXT_COLOR,
    fontSize: 12,
    textAlign: 'center',
  },
});
