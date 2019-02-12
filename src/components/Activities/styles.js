import { StyleSheet } from 'react-native';

import { colors, fonts } from '~/styles';

const styles = StyleSheet.create({
  circle: {
    backgroundColor: colors.greenDarker,
    borderRadius: 50,
    height: 95,
    marginLeft: 20,
    marginRight: 20,
    width: 95,
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.greenDark,
    borderRadius: 10,
    flexDirection: 'row',
    height: 120,
    marginBottom: 30,
  },
  icon: {
    // width: '30%',
  },
  image: {
    position: 'absolute',
    top: -30,
  },
  infos: {
    flex: 1,
  },
  title: {
    color: colors.white,
    fontFamily: fonts.family.Montserrat,
    fontSize: 20,
    fontWeight: fonts.weight.bold,
    textTransform: 'uppercase',
  },
});

export default styles;
