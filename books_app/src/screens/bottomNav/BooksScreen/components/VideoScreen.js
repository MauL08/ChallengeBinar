import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import VideoPlayer from 'react-native-video-controls';
import { ms } from 'react-native-size-matters';
import Color from '../../../../config/utils/color';

const VideoScreen = () => {
  const [type, setType] = useState('Internal');

  // Video State
  const [pause, setPause] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Video Player</Text>
      <View style={styles.typeControl}>
        <TouchableOpacity
          onPress={() => setType('Internal')}
          style={styles.internalButton}>
          <Text style={styles.buttonText}>Internal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setType('External')}
          style={styles.externalButton}>
          <Text style={styles.buttonText}>External</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textHelper}>You're viewing {type} Video</Text>
      <View style={styles.contentContainer}>
        {type === 'Internal' ? (
          <View>
            <Text>HEHE</Text>
          </View>
        ) : (
          <VideoPlayer
            source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
            style={styles.controlBanner}
            videoStyle={styles.videoBanner}
            disableBack
            volume={0.1}
            resizeMode="cover"
            showOnStart={false}
            paused={pause}
            onPlay={() => setPause(false)}
            onEnd={() => setPause(true)}
            controlTimeout={5000}
            scrubbing={30}
          />
        )}
      </View>
    </View>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: ms(20),
    paddingHorizontal: ms(20),
    backgroundColor: Color.BACKGROUND_COLOR,
    borderRadius: ms(20),
    marginTop: ms(30),
    marginHorizontal: ms(20),
    elevation: ms(6),
  },
  title: {
    color: Color.MAIN_COLOR,
    textAlign: 'left',
    fontSize: ms(18),
    fontWeight: 'bold',
  },
  typeControl: {
    flexDirection: 'row',
    marginVertical: ms(12),
  },
  internalButton: {
    backgroundColor: Color.NON_ACTIVE_COLOR,
    paddingVertical: ms(5),
    paddingHorizontal: ms(12),
    marginRight: ms(10),
    borderRadius: ms(4),
  },
  externalButton: {
    backgroundColor: Color.NON_ACTIVE_COLOR,
    paddingVertical: ms(5),
    paddingHorizontal: ms(12),
    borderRadius: ms(4),
  },
  buttonText: {
    color: Color.BACKGROUND_COLOR,
    fontSize: ms(12),
    fontWeight: '500',
  },
  textHelper: {
    color: Color.DISABLE_BUTTON_COLOR,
    fontWeight: '500',
    marginBottom: ms(10),
  },
  contentContainer: {
    alignItems: 'center',
  },
  controlBanner: {
    borderRadius: ms(10),
    height: ms(290),
    width: ms(290),
  },
  videoBanner: {
    height: ms(290),
    width: ms(290),
  },
});
