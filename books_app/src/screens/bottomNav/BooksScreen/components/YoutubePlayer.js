import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';

const YouTubePlayer = () => {
  return (
    <View>
      <Text>Youtube Player</Text>
      <YoutubePlayer videoId="ei7kbQhK1hA" />
    </View>
  );
};

export default YouTubePlayer;

const styles = StyleSheet.create({
  youtubeBanner: { alignSelf: 'stretch', height: 300 },
});
