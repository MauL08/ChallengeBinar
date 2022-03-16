import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import Data from '../../models/batman';
import Color from '../../config/utils/color';
import * as Date from '../../config/utils/changeDate';
import * as Time from '../../config/utils/runtime';
import {RateIcon, TimeIcon} from '../../assets';

const DetailBanner = () => {
  return (
    <View style={styles.detailContainer}>
      <Image source={{uri: Data.poster_path}} style={styles.imagePoster} />
      <View style={styles.infoContainer}>
        <Text style={styles.titleName}>{Data.original_title}</Text>
        <Text style={styles.titleTagline}>{Data.tagline}</Text>
        <View style={styles.releaseContainer}>
          <Text style={styles.titleStatus}>{Data.status}</Text>
          <Text style={styles.titleDate}>
            {Date.changeDate(Data.release_date)}
          </Text>
        </View>
        <View style={styles.rateTimeContainer}>
          <View style={styles.rateContainer}>
            <Image source={RateIcon} />
            <Text style={styles.titleRating}>{Data.vote_average}/10</Text>
          </View>
          <View style={styles.timeContainer}>
            <Image
              source={TimeIcon}
              style={{tintColor: 'white', width: 12, height: 12}}
            />
            <Text style={styles.titleTime}>
              {Time.changeRuntime(Data.runtime)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailBanner;

const styles = StyleSheet.create({
  detailContainer: {
    backgroundColor: Color.CONTAINER_COLOR,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 4,
    marginHorizontal: 12,
    marginTop: -50,
  },
  imagePoster: {
    height: 160,
    width: 100,
    borderRadius: 10,
  },
  infoContainer: {
    marginLeft: 16,
    width: 200,
  },
  titleName: {
    color: Color.TEXT_COLOR,
    fontSize: 14,
    fontWeight: 'bold',
  },
  titleTagline: {
    marginTop: 10,
    backgroundColor: Color.ACTIVE_BUTTON_COLOR,
    padding: 2,
    borderRadius: 10,
    textAlign: 'center',
    color: Color.CONTAINER_COLOR,
    fontSize: 12,
    fontWeight: 'bold',
  },
  releaseContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleStatus: {
    backgroundColor: Color.DISABLE_BUTTON_COLOR,
    color: Color.TEXT_COLOR,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 12,
  },
  titleDate: {
    backgroundColor: Color.DISABLE_BUTTON_COLOR,
    color: Color.TEXT_COLOR,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 12,
  },
  rateTimeContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rateContainer: {
    backgroundColor: Color.DISABLE_BUTTON_COLOR,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleRating: {
    marginLeft: 4,
    color: Color.TEXT_COLOR,
    fontSize: 12,
  },
  timeContainer: {
    backgroundColor: Color.DISABLE_BUTTON_COLOR,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleTime: {
    marginLeft: 4,
    color: Color.TEXT_COLOR,
    fontSize: 12,
  },
});
