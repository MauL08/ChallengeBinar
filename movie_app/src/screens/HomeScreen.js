import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import {useIsFocused} from '@react-navigation/native';

import Color from '../config/utils/color';

const HomeScreen = ({navigation}) => {
  function HomeScreenStatusBar() {
    const focus = useIsFocused();

    return focus ? (
      <StatusBar backgroundColor={Color.BACKGROUND_COLOR} />
    ) : null;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Color.BACKGROUND_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <HomeScreenStatusBar />
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
