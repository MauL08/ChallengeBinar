import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { ms } from 'react-native-size-matters';

import Color from '../../../../config/utils/color';
import theBook from '../../../../models/detailBook';

const BookInfo = () => {
  return (
    <View style={styles.bookInfo}>
      <Image style={styles.bookCover} source={{ uri: theBook.cover_image }} />
      <View style={styles.bookDetail}>
        <Text style={styles.titleBook}>{theBook.title}</Text>
        <Text style={styles.authorBook}>
          Created by <Text style={styles.author}>{theBook.author}</Text>
        </Text>
        <Text style={styles.publisherBook}>
          Published by <Text style={styles.publisher}>{theBook.publisher}</Text>
        </Text>
        <Text style={styles.pagesBook}>{theBook.page_count} Pages</Text>
      </View>
    </View>
  );
};

export default BookInfo;

const styles = StyleSheet.create({
  bookInfo: {
    flexDirection: 'row',
    marginTop: ms(10),
    marginHorizontal: ms(20),
  },
  bookCover: {
    height: ms(200),
    width: ms(180),
    borderWidth: 1,
    borderColor: Color.BACKGROUND_COLOR,
  },
  bookDetail: {
    marginTop: ms(20),
    width: ms(150),
  },
  titleBook: {
    fontSize: ms(15),
    color: Color.MAIN_COLOR,
    fontWeight: 'bold',
    letterSpacing: ms(1),
  },
  authorBook: {
    marginTop: ms(6),
    fontSize: ms(12),
    color: Color.NON_ACTIVE_COLOR,
    fontWeight: 'bold',
  },
  author: {
    color: Color.MAIN_COLOR,
  },
  publisher: {
    color: Color.MAIN_COLOR,
  },
  publisherBook: {
    marginTop: ms(6),
    fontSize: ms(12),
    color: Color.NON_ACTIVE_COLOR,
    fontWeight: 'bold',
  },
  pagesBook: {
    backgroundColor: Color.MAIN_COLOR,
    padding: ms(3),
    borderRadius: ms(10),
    marginTop: ms(6),
    fontSize: ms(12),
    color: Color.BACKGROUND_COLOR,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
