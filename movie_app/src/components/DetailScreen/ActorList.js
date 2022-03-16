import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';

import Color from '../../config/utils/color';

const ActorListTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.castListTitle}>Actor / Artist</Text>
    </View>
  );
};

export default ActorListTitle;

export const styles = StyleSheet.create({
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
    marginBottom: 12,
  },
  castMainContainer: {
    marginTop: 12,
  },
  castContainer: {
    backgroundColor: Color.DISABLE_BUTTON_COLOR,
    borderRadius: 10,
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
