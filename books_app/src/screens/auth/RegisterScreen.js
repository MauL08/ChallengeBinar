import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, { useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import {
  UserIcon,
  EmailIcon,
  PassIcon,
  BackArrowIcon,
  RegisterBannerImage,
  FooterImage,
} from '../../assets/';
import { registerScreenStyle } from '../../config/utils/styles';
import ScreenStatusBar from '../../components/ScreenStatusBar';

const LoginScreen = () => {
  const focus = useIsFocused();
  const navigation = useNavigation();

  const [usernameFocus, setUsernameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  return (
    <ImageBackground
      source={FooterImage}
      style={registerScreenStyle.container}
      resizeMode="contain">
      <ScreenStatusBar status={focus} />
      <TouchableOpacity
        style={registerScreenStyle.backArrowContainer}
        onPress={() => navigation.navigate('Login')}>
        <Image source={BackArrowIcon} style={registerScreenStyle.backArrow} />
      </TouchableOpacity>
      <View style={registerScreenStyle.formContainer}>
        <Image
          source={RegisterBannerImage}
          style={registerScreenStyle.bannerImage}
        />
        <View style={registerScreenStyle.usernameInputContainer(usernameFocus)}>
          <Image
            source={UserIcon}
            style={registerScreenStyle.usernamePrefixIcon(usernameFocus)}
          />
          <TextInput
            style={registerScreenStyle.textInput}
            placeholder="Full Name"
            onFocus={() => setUsernameFocus(true)}
            onBlur={() => setUsernameFocus(false)}
          />
        </View>
        <View style={registerScreenStyle.emailInputContainer(emailFocus)}>
          <Image
            source={EmailIcon}
            style={registerScreenStyle.emailPrefixIcon(emailFocus)}
          />
          <TextInput
            style={registerScreenStyle.textInput}
            placeholder="Email"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
          />
        </View>
        <View style={registerScreenStyle.passwordInputContainer(passwordFocus)}>
          <Image
            source={PassIcon}
            style={registerScreenStyle.passPrefixIcon(passwordFocus)}
          />
          <TextInput
            style={registerScreenStyle.textInput}
            placeholder="Password"
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          style={registerScreenStyle.registerButton}
          onPress={() => navigation.navigate('Success')}>
          <Text style={registerScreenStyle.registerButtonText}>Register</Text>
        </TouchableOpacity>
        <Text style={registerScreenStyle.guideText}>
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={registerScreenStyle.guideRegisterText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
