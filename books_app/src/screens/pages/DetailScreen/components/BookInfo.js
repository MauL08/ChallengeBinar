import { Text, View, Image } from 'react-native';
import React from 'react';

import { styles } from '../styles/bookInfoStyle';
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
