import {StyleSheet, View, StatusBar} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';

import {FetchAll} from '../config/api';
import Loading from '../components/Loading';
import Color from '../config/utils/color';
import MovieList from '../components/MovieList';
import Header from '../components/GenreScreen/Header';

const GenresScreen = props => {
  const [data, getData] = useState(false);

  useEffect(() => {
    FetchAll.get(getData);
  }, []);

  function GenresScreenStatusBar() {
    const focus = useIsFocused();

    return focus ? (
      <StatusBar backgroundColor={Color.BACKGROUND_COLOR} />
    ) : null;
  }

  if (data) {
    return (
      <View style={styles.container}>
        <GenresScreenStatusBar />
        <Header />
        {/* <MovieList data={data.results} /> */}
      </View>
    );
  } else {
    return <Loading />;
  }
};

export default GenresScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.BACKGROUND_COLOR,
  },
});
