import { ScrollView, TouchableOpacity, Text, View } from 'react-native';
import React from 'react';
import NumberFormat from 'react-number-format';
import { useIsFocused } from '@react-navigation/native';

import { styles } from './styles/mainStyle';
import ScreenStatusBar from '../../../components/ScreenStatusBar';
import theBook from '../../../models/detailBook';

import Header from './components/Header';
import BookInfo from './components/BookInfo';
import Stocks from './components/Stocks';
import Overview from './components/Overview';

const DetailScreen = () => {
  const focus = useIsFocused();

  return (
    <ScrollView contentContainerStyle={styles.main}>
      <ScreenStatusBar status={focus} />
      <View>
        <Header />
        <BookInfo />
        <Stocks />
        <Overview />
      </View>
      <TouchableOpacity style={styles.buyButton}>
        <NumberFormat
          value={theBook.price}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'Rp'}
          renderText={value => (
            <Text style={styles.buyButtonText}>Buy for {value}</Text>
          )}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DetailScreen;
