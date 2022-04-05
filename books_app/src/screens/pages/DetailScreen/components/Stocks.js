import { Text, View } from 'react-native';
import React from 'react';

import { styles } from '../styles/stocksStyle';

const Stocks = props => {
  return (
    <View style={styles.buyBanner}>
      <View style={styles.container}>
        <Text style={styles.title}>Stocks</Text>
        <Text style={styles.amount}>{props.data.stock_available}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Rating</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>
            {Number(props.data.average_rating) / 2}
            <Text style={styles.detailedText}>/5</Text>
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Total Sale</Text>
        <Text style={styles.amount}>{props.data.total_sale}</Text>
      </View>
    </View>
  );
};

export default Stocks;
