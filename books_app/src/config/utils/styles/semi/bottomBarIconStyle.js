import { StyleSheet } from 'react-native';
import Color from '../../color';

export const bottomBarIconStyle = StyleSheet.create({
  icon: focused => ({
    tintColor: focused ? Color.MAIN_COLOR : '#DBC6A6',
  }),
});
