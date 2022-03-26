import React from 'react';
import LottieView from 'lottie-react-native';
import { useIsFocused } from '@react-navigation/native';

import { BookAnimation } from '../assets';
import { backgroundAnimation } from '../config/utils/styles';
import ScreenStatusBar from './ScreenStatusBar';

const Loading = () => {
  const focus = useIsFocused();

  return (
    <>
      <ScreenStatusBar status={focus} />
      <LottieView
        source={BookAnimation}
        autoPlay
        loop
        style={backgroundAnimation.container}
      />
    </>
  );
};

export default Loading;
