import { View, FlatList, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { ms } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';

import ScreenStatusBar from '../../../components/ScreenStatusBar';
import { styles } from './styles';

import Loading from '../../../components/Loading';
import Header from './components/Header';
import Welcome from './components/Welcome';
import RecommendBooks from './components/RecommendBooks';
import PopularBooks from './components/PopularBooks';

import { getAllBooks } from '../../../config/api/slice/booksSlice';

const HomeScreen = () => {
  const focus = useIsFocused();
  const dispatch = useDispatch();

  const { userInfo, token, isLogged } = useSelector(state => state.user);
  const movieData = useSelector(state => state.books.booksData);

  useEffect(() => {
    dispatch(getAllBooks(token));
  }, [dispatch, token]);

  if (isLogged) {
    return (
      <View style={styles.main}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={movieData?.results}
          numColumns={2}
          keyExtractor={(item, index) => String(index)}
          columnWrapperStyle={{ marginLeft: ms(15) }}
          ListHeaderComponent={() => (
            <>
              <ScreenStatusBar status={focus} />
              <Header />
              <Welcome user={userInfo} />
              <RecommendBooks data={movieData.results} />
              <Text style={styles.popular}>Popular</Text>
            </>
          )}
          renderItem={({ item, index }) => (
            <PopularBooks items={item} index={index} />
          )}
        />
      </View>
    );
  } else {
    return <Loading />;
  }
};

export default HomeScreen;
