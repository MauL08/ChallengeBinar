import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import { CheckAnimation } from '../../assets';
import { successScreenStyle } from '../../config/utils/styles/main/successScreenStyle';
import ScreenStatusBar from '../../components/ScreenStatusBar';
import LottieView from 'lottie-react-native';

const SuccessScreen = () => {
  const focus = useIsFocused();
  const navigation = useNavigation();

  return (
    <View style={successScreenStyle.container}>
      <ScreenStatusBar status={focus} />
      <Text style={successScreenStyle.titleText}>Registration Completed!</Text>
      <View style={successScreenStyle.checkerContainer}>
        <LottieView
          source={CheckAnimation}
          autoPlay={true}
          loop={false}
          style={successScreenStyle.checker}
        />
        <Text style={successScreenStyle.checkerText}>
          We sent email verification to your email
        </Text>
      </View>
      <TouchableOpacity
        style={successScreenStyle.backLoginButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={successScreenStyle.backLoginText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuccessScreen;
