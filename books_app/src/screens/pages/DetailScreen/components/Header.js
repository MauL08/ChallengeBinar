import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Share from 'react-native-share';
import PushNotification from 'react-native-push-notification';

import { styles } from '../styles/headerStyle';
import { BackIcon, LoveIcon, ShareIcon } from '../../../../assets';

const Header = props => {
  const navigation = useNavigation();

  const onShare = async () => {
    const content = {
      message: 'Credits to the API : ',
      url: 'http://code.aldipee.com/api/v1/books',
    };
    await Share.open(content)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onPushNotification = value => {
    PushNotification.localNotification({
      channelId: 'notification-channel',
      title: 'You liked a book.',
      message: value,
    });
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.backIconContainer}
        onPress={() => navigation.goBack()}>
        <Image source={BackIcon} style={styles.backIcon} />
      </TouchableOpacity>
      <View style={styles.interactionContainer}>
        <TouchableOpacity
          style={styles.loveIconContainer}
          onPress={() => onPushNotification(props.title)}>
          <Image source={LoveIcon} style={styles.loveIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareIconContainer} onPress={onShare}>
          <Image source={ShareIcon} style={styles.shareIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
