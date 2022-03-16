import {StyleSheet, StatusBar, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import {API_URL} from '@env';

import Color from '../config/utils/color';
import BackdropNavigation from '../components/DetailScreen/BackdropNavigation';
import DetailBanner from '../components/DetailScreen/DetailBanner';
import BodyDetail from '../components/DetailScreen/BodyDetail';
import ActorList from '../components/DetailScreen/ActorList';

const DetailScreen = ({route}) => {
  const [data, getData] = useState({});

  useEffect(() => {
    getByID();
  }, []);

  const getByID = async () => {
    await axios
      .get(`${API_URL}/${route.params.movieId}`)
      .then(req => {
        console.log(req.data);
        getData(req.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  function DetailScreenStatusBar() {
    const focus = useIsFocused();

    return focus ? (
      <StatusBar backgroundColor={Color.BACKGROUND_COLOR} />
    ) : null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <DetailScreenStatusBar />
      <BackdropNavigation movieData={data} />
      {/* <DetailBanner movieData={data} />
      <BodyDetail movieData={data} />
      <ActorList movieData={data} /> */}
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.BACKGROUND_COLOR,
  },
});
