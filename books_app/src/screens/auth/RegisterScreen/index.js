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
} from '../../../assets';
import { styles } from './styles';
import ScreenStatusBar from '../../../components/ScreenStatusBar';

const LoginScreen = () => {
  const focus = useIsFocused();
  const navigation = useNavigation();

  const [usernameFocus, setUsernameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  return (
    <ImageBackground
      source={FooterImage}
      style={styles.container}
      resizeMode="contain">
      <ScreenStatusBar status={focus} />
      <TouchableOpacity
        style={styles.backArrowContainer}
        onPress={() => navigation.navigate('Login')}>
        <Image source={BackArrowIcon} style={styles.backArrow} />
      </TouchableOpacity>
      <View style={styles.formContainer}>
        <Image source={RegisterBannerImage} style={styles.bannerImage} />
        <View style={styles.usernameInputContainer(usernameFocus)}>
          <Image
            source={UserIcon}
            style={styles.usernamePrefixIcon(usernameFocus)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Full Name"
            onFocus={() => setUsernameFocus(true)}
            onBlur={() => setUsernameFocus(false)}
          />
        </View>
        <View style={styles.emailInputContainer(emailFocus)}>
          <Image
            source={EmailIcon}
            style={styles.emailPrefixIcon(emailFocus)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
          />
        </View>
        <View style={styles.passwordInputContainer(passwordFocus)}>
          <Image
            source={PassIcon}
            style={styles.passPrefixIcon(passwordFocus)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('Success')}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.guideText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.guideRegisterText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
