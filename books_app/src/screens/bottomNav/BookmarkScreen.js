import { Text, View } from 'react-native';
import React from 'react';
import { useIsFocused } from '@react-navigation/native';

import ScreenStatusBar from '../../components/ScreenStatusBar';
import { bookmarkScreenStyle } from '../../config/utils/styles';

const BookmarkScreen = () => {
  const focus = useIsFocused();

  return (
    <View style={bookmarkScreenStyle.container}>
      <ScreenStatusBar status={focus} />
      <Text>Sorry, this screen is currently empty!</Text>
    </View>
  );
};

export default BookmarkScreen;
