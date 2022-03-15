import {StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {useIsFocused} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Color from '../config/utils/color';

import Header from '../components/HomeScreen/Header';
import Recommended from '../components/HomeScreen/Recommended';
import Latest from '../components/HomeScreen/Latest';

const HomeScreen = () => {
  function HomeScreenStatusBar() {
    const focus = useIsFocused();

    return focus ? (
      <StatusBar backgroundColor={Color.BACKGROUND_COLOR} />
    ) : null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <HomeScreenStatusBar />
      <Header />
      <Recommended />
      <Latest />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.BACKGROUND_COLOR,
  },
});
