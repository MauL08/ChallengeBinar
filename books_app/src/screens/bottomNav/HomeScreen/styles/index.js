import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';
import Color from '../../../../config/utils/color';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Color.BACKGROUND_COLOR,
  },
  container: {
    margin: ms(18),
  },
});
