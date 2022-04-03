import { View, FlatList, Text } from 'react-native';
import React from 'react';
import { useIsFocused } from '@react-navigation/native';
import { ms } from 'react-native-size-matters';

import ScreenStatusBar from '../../../components/ScreenStatusBar';
import { styles } from './styles';

import Books from '../../../models/allBooks';

import Header from './components/Header';
import Welcome from './components/Welcome';
import RecommendBooks from './components/RecommendBooks';
import PopularBooks from './components/PopularBooks';

const HomeScreen = () => {
  const focus = useIsFocused();

  return (
    <View style={styles.main}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Books}
        numColumns={2}
        keyExtractor={(item, index) => String(index)}
        columnWrapperStyle={{ marginLeft: ms(15) }}
        ListHeaderComponent={() => (
          <>
            <ScreenStatusBar status={focus} />
            <Header />
            <Welcome />
            <RecommendBooks />
            <Text style={styles.popular}>Popular</Text>
          </>
        )}
        renderItem={({ item, index }) => (
          <PopularBooks items={item} index={index} />
        )}
      />
    </View>
  );
};

export default HomeScreen;
