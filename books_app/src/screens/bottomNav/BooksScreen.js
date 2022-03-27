import { Text, View } from 'react-native';
import React from 'react';
import { useIsFocused } from '@react-navigation/native';

import ScreenStatusBar from '../../components/ScreenStatusBar';
import { bookScreenStyle } from '../../config/utils/styles';

const BooksScreen = () => {
  const focus = useIsFocused();
  return (
    <View style={bookScreenStyle.container}>
      <ScreenStatusBar status={focus} />
      <Text>Sorry, this screen is currently empty!</Text>
    </View>
  );
};

export default BooksScreen;
