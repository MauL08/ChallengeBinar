import { Text, View } from 'react-native';
import React from 'react';

import { styles } from '../styles/overviewStyle';
import theBook from '../../../../models/detailBook';

const Overview = () => {
  return (
    <View style={styles.description}>
      <Text style={styles.overviewText}>Overview</Text>
      <Text style={styles.textDesc}>{theBook.synopsis}</Text>
    </View>
  );
};

export default Overview;
