import { Text, View } from 'react-native';
import React from 'react';
import { useIsFocused } from '@react-navigation/native';

import ScreenStatusBar from '../../../components/ScreenStatusBar';
import { styles } from './styles';

const BooksScreen = () => {
  const focus = useIsFocused();
  return (
    <View style={styles.container}>
      <ScreenStatusBar status={focus} />
      <Text>Sorry, this screen is currently empty!</Text>
    </View>
  );
};

export default BooksScreen;
