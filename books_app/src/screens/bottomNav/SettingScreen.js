import { Text, View } from 'react-native';
import React from 'react';
import { useIsFocused } from '@react-navigation/native';

import { settingScreenStyle } from '../../config/utils/styles';
import ScreenStatusBar from '../../components/ScreenStatusBar';

const SettingScreen = () => {
  const focus = useIsFocused();

  return (
    <View style={settingScreenStyle.container}>
      <ScreenStatusBar status={focus} />
      <Text>Sorry, this screen is currently empty!</Text>
    </View>
  );
};

export default SettingScreen;
