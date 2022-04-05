import {
  StyleSheet,
  Text,
  ScrollView,
  RefreshControl,
  View,
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import React, { useState } from 'react';
import Color from '../config/utils/color';
import ScreenStatusBar from './ScreenStatusBar';
import LottieView from 'lottie-react-native';
import { ms } from 'react-native-size-matters';
import { NoInternetAnimation } from '../assets';

const NoInternet = () => {
  const [refresh, setRefresh] = useState(false);
  const focus = useIsFocused();

  const onRefresh = () => {
    setRefresh(true);
    setRefresh(false);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
      }>
      <ScreenStatusBar status={focus} />
      <LottieView source={NoInternetAnimation} autoPlay loop />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Please Check your{' '}
          <Text style={styles.textGuide}>Internet Connection</Text>
        </Text>
        <Text style={styles.scrollText}>(Scroll to Refresh)</Text>
      </View>
    </ScrollView>
  );
};

export default NoInternet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Color.BACKGROUND_COLOR,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: ms(120),
  },
  text: {
    fontSize: ms(16),
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: ms(10),
  },
  textGuide: {
    color: Color.MAIN_COLOR,
    fontWeight: 'bold',
  },
  scrollText: {
    color: Color.NON_ACTIVE_COLOR,
    fontWeight: '500',
    fontSize: ms(12),
  },
});
