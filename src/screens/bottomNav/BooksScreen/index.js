import { ScrollView } from 'react-native';
import React from 'react';
import { useIsFocused } from '@react-navigation/native';

import ScreenStatusBar from '../../../components/ScreenStatusBar';
import { styles } from './styles';

const BooksScreen = () => {
  const focus = useIsFocused();
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ScreenStatusBar status={focus} />
    </ScrollView>
  );
};

export default BooksScreen;
