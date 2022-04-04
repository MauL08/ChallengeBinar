import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { styles } from '../styles/recommendStyle';
import Books from '../../../../models/allBooks';

const RecommendBooks = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Recommended</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={Books}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.bookContainer(index)}
            onPress={() => navigation.navigate('Detail')}>
            <Image
              source={{ uri: item.cover_image }}
              style={styles.bookCover}
            />
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={styles.bookAuthor}>{item.author}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default RecommendBooks;