import React from 'react';
import LottieView from 'lottie-react-native';
import { useIsFocused } from '@react-navigation/native';

import { BookAnimation } from '../assets';
import { lottieStyle } from '../config/utils/styles';
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
        style={lottieStyle.container}
      />
    </>
  );
};

export default Loading;
