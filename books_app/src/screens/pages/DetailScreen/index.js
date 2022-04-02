import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import React from 'react';
import NumberFormat from 'react-number-format';
import { useIsFocused } from '@react-navigation/native';
import { ms } from 'react-native-size-matters';

import ScreenStatusBar from '../../../components/ScreenStatusBar';
import Color from '../../../config/utils/color';
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

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Color.BACKGROUND_COLOR,
    justifyContent: 'space-between',
  },
  buyButton: {
    elevation: ms(3),
    backgroundColor: Color.MAIN_COLOR,
    paddingVertical: ms(12),
    borderRadius: ms(10),
    marginHorizontal: ms(20),
    marginBottom: ms(20),
  },
  buyButtonText: {
    color: Color.BACKGROUND_COLOR,
    fontSize: ms(14),
    fontWeight: '500',
    textAlign: 'center',
  },
});
