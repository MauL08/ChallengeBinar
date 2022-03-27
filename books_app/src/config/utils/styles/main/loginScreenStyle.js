import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Color from '../../color';

const inputStyle = focus => ({
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 2,
  borderBottomColor: focus ? Color.MAIN_COLOR : Color.NON_ACTIVE_COLOR,
  borderLeftColor: Color.BACKGROUND_COLOR,
  borderRightColor: Color.BACKGROUND_COLOR,
  borderTopColor: Color.BACKGROUND_COLOR,
  width: moderateScale(200),
  marginBottom: moderateScale(18),
});

const iconStyle = focus => ({
  tintColor: focus ? Color.MAIN_COLOR : Color.NON_ACTIVE_COLOR,
  marginRight: moderateScale(12),
  marginLeft: moderateScale(7),
});

export const loginScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.BACKGROUND_COLOR,
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImage: {
    height: moderateScale(240),
    width: moderateScale(200),
    marginVertical: moderateScale(30),
  },
  usernameInputContainer: focus => ({
    ...inputStyle(focus),
  }),
  passwordInputContainer: focus => ({
    ...inputStyle(focus),
  }),
  userPrefixIcon: focus => ({
    ...iconStyle(focus),
  }),
  passPrefixIcon: focus => ({
    ...iconStyle(focus),
  }),
  textInput: {
    width: moderateScale(150),
  },
  loginButton: {
    marginVertical: moderateScale(15),
    backgroundColor: Color.MAIN_COLOR,
    borderRadius: moderateScale(8),
    width: moderateScale(200),
    padding: moderateScale(12),
  },
  loginButtonText: {
    color: Color.BACKGROUND_COLOR,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: moderateScale(14),
  },
  guideText: {
    fontSize: moderateScale(12),
  },
  guideRegisterText: {
    color: Color.MAIN_COLOR,
    fontWeight: 'bold',
    marginTop: moderateScale(2),
    fontSize: moderateScale(14),
  },
});
