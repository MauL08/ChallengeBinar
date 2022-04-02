import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ms } from 'react-native-size-matters';
import { Rating } from 'react-native-ratings';

import theBook from '../../../../models/detailBook';
import Color from '../../../../config/utils/color';

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

const styles = StyleSheet.create({
  buyBanner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: ms(20),
    marginHorizontal: ms(40),
  },
  container: {
    alignItems: 'center',
  },
  title: {
    color: Color.MAIN_COLOR,
    fontWeight: 'bold',
    marginBottom: ms(3),
  },
  amount: {
    fontWeight: '500',
    color: Color.DISABLE_BUTTON_COLOR,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: Color.DISABLE_BUTTON_COLOR,
    marginLeft: ms(5),
    fontWeight: '500',
  },
  detailedText: {
    color: Color.NON_ACTIVE_COLOR,
  },
});
