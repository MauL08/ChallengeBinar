import { Text, View, FlatList } from 'react-native';
import React from 'react';
import { useIsFocused } from '@react-navigation/native';

import ScreenStatusBar from '../../../components/ScreenStatusBar';
import { styles } from './styles';

import Books from '../../../models/allBooks';
import PopularBooks from './components/popularBooks';
import RecommendBooks from './components/recommendBooks';

const HomeScreen = () => {
  const focus = useIsFocused();

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <ScreenStatusBar status={focus} />
        <View>
          <Text>Good Morning, Akbar!</Text>
        </View>
        <FlatList
          ItemSeparatorComponent={() => (
            <View>
              <Text>Separator</Text>
            </View>
          )}
          data={Books}
          keyExtractor={item => item.id}
          ListHeaderComponent={({ item }) => RecommendBooks(item)}
          renderItem={({ item }) => PopularBooks(item)}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
