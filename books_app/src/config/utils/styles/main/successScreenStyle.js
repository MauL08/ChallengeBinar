import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import Color from '../../color';

export const successScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.BACKGROUND_COLOR,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: moderateScale(20),
    marginTop: moderateScale(45),
  },
  checkerContainer: {
    alignItems: 'center',
  },
  checker: {
    height: moderateScale(180),
    marginBottom: moderateScale(20),
  },
  checkerText: {
    fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
  backLoginButton: {
    marginTop: moderateScale(10),
    marginBottom: moderateScale(45),
    backgroundColor: Color.MAIN_COLOR,
    borderRadius: moderateScale(8),
    width: moderateScale(200),
    padding: moderateScale(12),
  },
  backLoginText: {
    color: Color.BACKGROUND_COLOR,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: moderateScale(14),
  },
});
