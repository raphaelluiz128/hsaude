import { StyleSheet } from 'react-native';

import { colors, fonts } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  icon: {
    marginRight: 3,
  },
  iconText: {
    color: colors.white,
    fontFamily: fonts.family.Montserrat,
    fontSize: 12,
    fontWeight: fonts.weight.semiBold,
    marginRight: 10,
  },
  info: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default styles;
