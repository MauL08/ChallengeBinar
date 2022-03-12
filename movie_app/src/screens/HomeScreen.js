import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

import Color from '../config/utils/color';

const HomeScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Color.MAIN_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          padding: 20,
          borderRadius: 10,
        }}
        onPress={() => {
          navigation.navigate('Detail');
        }}>
        <Text>Press here to Detail Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
