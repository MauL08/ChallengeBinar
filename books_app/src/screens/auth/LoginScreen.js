import {
  ScrollView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import { EmailIcon, PassIcon, BannerImage } from '../../assets/';
import { loginScreenStyle } from '../../config/utils/styles';
import ScreenStatusBar from '../../components/ScreenStatusBar';

const LoginScreen = () => {
  const focus = useIsFocused();
  const navigation = useNavigation();

  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  return (
    <ScrollView style={loginScreenStyle.container}>
      <ScreenStatusBar status={focus} />
      <View style={loginScreenStyle.formContainer}>
        <Image source={BannerImage} style={loginScreenStyle.bannerImage} />
        <View style={loginScreenStyle.emailInputContainer(emailFocus)}>
          <Image
            source={EmailIcon}
            style={loginScreenStyle.emailPrefixIcon(emailFocus)}
          />
          <TextInput
            style={loginScreenStyle.textInput}
            placeholder="Email"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
          />
        </View>
        <View style={loginScreenStyle.passwordInputContainer(passwordFocus)}>
          <Image
            source={PassIcon}
            style={loginScreenStyle.passPrefixIcon(passwordFocus)}
          />
          <TextInput
            style={loginScreenStyle.textInput}
            placeholder="Password"
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          style={loginScreenStyle.loginButton}
          onPress={() => navigation.navigate('Main')}>
          <Text style={loginScreenStyle.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <Text style={loginScreenStyle.guideText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={loginScreenStyle.guideRegisterText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
