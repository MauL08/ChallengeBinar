import {StyleSheet, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import {useIsFocused} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Color from '../config/utils/color';
import BackdropNavigation from '../components/DetailScreen/BackdropNavigation';
import DetailBanner from '../components/DetailScreen/DetailBanner';
import BodyDetail from '../components/DetailScreen/BodyDetail';
import ActorList from '../components/DetailScreen/ActorList';

const DetailScreen = () => {
  function DetailScreenStatusBar() {
    const focus = useIsFocused();

    return focus ? (
      <StatusBar backgroundColor={Color.BACKGROUND_COLOR} />
    ) : null;
  }

  return (
    <ScrollView style={styles.container}>
      <DetailScreenStatusBar />
      <BackdropNavigation />
      <DetailBanner />
      <BodyDetail />
      <ActorList />
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.BACKGROUND_COLOR,
  },
});
