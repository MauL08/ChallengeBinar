import {StyleSheet, StatusBar, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import {API_URL} from '@env';

import Color from '../config/utils/color';

import * as API from '../config/api/getAll';

import Header from '../components/HomeScreen/Header';
import Recommended from '../components/HomeScreen/Recommended';
import Latest from '../components/HomeScreen/Latest';

const HomeScreen = () => {
  const [data, getData] = useState([]);

  useEffect(() => {
    getAPI();
  }, []);

  const getAPI = async () => {
    await axios
      .get(API_URL)
      .then(req => {
        // console.log(req.data.results);
        getData(req.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  function HomeScreenStatusBar() {
    const focus = useIsFocused();

    return focus ? (
      <StatusBar backgroundColor={Color.BACKGROUND_COLOR} />
    ) : null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <HomeScreenStatusBar />
      <Header />
      <Recommended data={data.results} />
      <Latest data={data.results} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.BACKGROUND_COLOR,
  },
});
