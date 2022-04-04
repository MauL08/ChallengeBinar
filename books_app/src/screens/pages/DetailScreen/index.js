import { ScrollView, TouchableOpacity, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import NumberFormat from 'react-number-format';
import { useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import PushNotification from 'react-native-push-notification';

import { styles } from './styles/mainStyle';
import ScreenStatusBar from '../../../components/ScreenStatusBar';

import Header from './components/Header';
import BookInfo from './components/BookInfo';
import Stocks from './components/Stocks';
import Overview from './components/Overview';
import { getBooksByID } from '../../../config/api/slice/booksSlice';

const DetailScreen = ({ routes }) => {
  const focus = useIsFocused();
  const dispatch = useDispatch();

  const token = useSelector(state => state.user.token);
  const movieData = useSelector(state => state.books.booksData);

  useEffect(() => {
    createChannels();
    dispatch(getBooksByID(token, routes.params.id));
  }, [dispatch, routes.params.id, token]);

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'notification-channel',
      channelName: 'notification',
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.main}>
      <ScreenStatusBar status={focus} />
      <View>
        <Header title={movieData.title} />
        <BookInfo data={movieData} />
        <Stocks data={movieData} />
        <Overview data={movieData} />
      </View>
      <TouchableOpacity style={styles.buyButton}>
        <NumberFormat
          value={movieData.price}
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
