import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import { CheckAnimation } from '../../../assets';
import { styles } from './styles';
import ScreenStatusBar from '../../../components/ScreenStatusBar';
import LottieView from 'lottie-react-native';

const SuccessScreen = () => {
  const focus = useIsFocused();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScreenStatusBar status={focus} />
      <Text style={styles.titleText}>Registration Completed!</Text>
      <View style={styles.checkerContainer}>
        <LottieView
          source={CheckAnimation}
          autoPlay={true}
          loop={false}
          style={styles.checker}
        />
        <Text style={styles.checkerText}>
          We sent email verification to your email
        </Text>
      </View>
      <TouchableOpacity
        style={styles.backLoginButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.backLoginText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuccessScreen;
