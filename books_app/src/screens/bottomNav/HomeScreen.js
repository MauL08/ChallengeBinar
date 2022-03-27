import { Text, View } from 'react-native';
import React from 'react';
import { useIsFocused } from '@react-navigation/native';

import ScreenStatusBar from '../../components/ScreenStatusBar';
import { homeStyle } from '../../config/utils/styles';

const HomeScreen = () => {
  const focus = useIsFocused();

  return (
    <View style={homeStyle.container}>
      <ScreenStatusBar status={focus} />
      <Text>Sorry, this screen is currently empty!</Text>
    </View>
  );
};

export default HomeScreen;
