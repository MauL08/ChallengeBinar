import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Color from '../config/utils/color';

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Color.MAIN_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
