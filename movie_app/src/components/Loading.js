import React from 'react';
import {HandAnimation} from '../assets';
import Color from '../config/utils/color';
import LottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <LottieView
      source={HandAnimation}
      autoPlay
      loop
      style={{backgroundColor: Color.BACKGROUND_COLOR}}
    />
  );
};

export default Loading;
