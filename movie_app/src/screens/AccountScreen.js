import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Color from '../config/utils/color';

const AccountScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Color.MAIN_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Sorry! This screen is currently empty.</Text>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
