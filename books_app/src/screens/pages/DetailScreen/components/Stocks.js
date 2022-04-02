import { Text, View } from 'react-native';
import React from 'react';
import { Rating } from 'react-native-ratings';

import { styles } from '../styles/stocksStyle';
import theBook from '../../../../models/detailBook';

const Stocks = () => {
  return (
    <View style={styles.buyBanner}>
      <View style={styles.container}>
        <Text style={styles.title}>Stocks</Text>
        <Text style={styles.amount}>{theBook.stock_available}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Rating</Text>
        <View style={styles.ratingContainer}>
          <Rating
            startingValue={Number(theBook.average_rating) / 2}
            readonly={true}
            imageSize={20}
          />
          <Text style={styles.ratingText}>
            {Number(theBook.average_rating) / 2}
            <Text style={styles.detailedText}>/5</Text>
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Total Sale</Text>
        <Text style={styles.amount}>{theBook.total_sale}</Text>
      </View>
    </View>
  );
};

export default Stocks;
