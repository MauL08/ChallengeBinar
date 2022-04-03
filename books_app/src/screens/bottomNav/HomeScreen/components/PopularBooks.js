import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import React from 'react';
import { ms } from 'react-native-size-matters';
import { Rating } from 'react-native-ratings';
import NumberFormat from 'react-number-format';

import Color from '../../../../config/utils/color';
import Books from '../../../../models/allBooks';

const PopularBooks = props => {
  const index = props.index;

  return (
    <TouchableOpacity style={styles.bookContainer(index)}>
      <Image
        source={{ uri: props.items.cover_image }}
        style={styles.bookImage}
      />
      <Text style={styles.bookTitle}>{props.items.title}</Text>
      <Text style={styles.bookAuthor}>{props.items.author}</Text>
      <Text style={styles.bookPublisher}>{props.items.publisher}</Text>
      <View style={styles.bookRating}>
        <Rating
          startingValue={Number(props.items.average_rating) / 2}
          readonly={true}
          imageSize={15}
        />
        <Text style={styles.ratingText}>
          {Number(props.items.average_rating) / 2}
          <Text style={styles.detailedText}>/5</Text>
        </Text>
      </View>
      <NumberFormat
        value={props.items.price}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'Rp'}
        renderText={value => <Text style={styles.bookPrice}>{value}</Text>}
      />
    </TouchableOpacity>
  );
};

export default PopularBooks;

const styles = StyleSheet.create({
  bookContainer: index => ({
    marginBottom: index === Books.length - 1 ? ms(90) : ms(0),
    marginTop: ms(18),
    marginHorizontal: ms(15),
    alignItems: 'center',
    width: ms(140),
  }),
  bookImage: {
    height: ms(210),
    width: ms(140),
    borderWidth: ms(1),
    borderColor: Color.BACKGROUND_COLOR,
    borderRadius: ms(10),
  },
  bookTitle: {
    textAlign: 'center',
    marginTop: ms(10),
    width: ms(130),
    fontSize: ms(12),
    color: Color.BACKGROUND_COLOR,
    fontWeight: 'bold',
    backgroundColor: Color.MAIN_COLOR,
    padding: ms(10),
    borderRadius: ms(10),
  },
  bookAuthor: {
    marginTop: ms(4),
    fontSize: ms(12),
    color: Color.NON_ACTIVE_COLOR,
    fontWeight: 'bold',
  },
  bookPublisher: {
    marginTop: ms(2),
    fontSize: ms(12),
    color: Color.NON_ACTIVE_COLOR,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bookRating: {
    marginTop: ms(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: Color.DISABLE_BUTTON_COLOR,
    marginLeft: ms(5),
    fontWeight: '500',
    fontSize: ms(12),
  },
  detailedText: {
    color: Color.NON_ACTIVE_COLOR,
  },
  bookPrice: {
    backgroundColor: Color.NON_ACTIVE_COLOR,
    paddingVertical: ms(4),
    paddingHorizontal: ms(8),
    marginTop: ms(8),
    fontSize: ms(12),
    borderRadius: ms(5),
    color: Color.BACKGROUND_COLOR,
    fontWeight: 'bold',
    letterSpacing: ms(1),
  },
});
