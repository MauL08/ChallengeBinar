import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import Books from '../../../../models/allBooks';
import { ms } from 'react-native-size-matters';
import Color from '../../../../config/utils/color';

const RecommendBooks = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Recommended</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={Books}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.bookContainer(index)}>
            <Image
              source={{ uri: item.cover_image }}
              style={styles.bookCover}
            />
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={styles.bookAuthor}>{item.author}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default RecommendBooks;

const styles = StyleSheet.create({
  container: {
    marginTop: ms(16),
  },
  textTitle: {
    color: Color.DISABLE_BUTTON_COLOR,
    letterSpacing: ms(1),
    fontSize: ms(16),
    fontWeight: 'bold',
    marginLeft: ms(18),
  },
  bookContainer: index => ({
    marginTop: ms(14),
    marginRight: ms(20),
    marginLeft: index === 0 ? ms(18) : ms(0),
  }),
  bookCover: {
    height: ms(200),
    width: ms(130),
    borderWidth: ms(1),
    borderColor: Color.BACKGROUND_COLOR,
    borderRadius: ms(10),
  },
  bookTitle: {
    marginTop: ms(10),
    width: ms(130),
    fontSize: ms(12),
    color: Color.MAIN_COLOR,
    fontWeight: 'bold',
  },
  bookAuthor: {
    marginTop: ms(2),
    color: Color.NON_ACTIVE_COLOR,
    fontWeight: '500',
    fontSize: ms(11),
  },
});
