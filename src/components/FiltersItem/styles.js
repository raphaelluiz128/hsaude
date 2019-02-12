import { StyleSheet } from 'react-native';

import { colors } from '~/styles';

const styles = StyleSheet.create({
  badge: {
    backgroundColor: colors.green,
    borderColor: colors.white,
    borderRadius: 50,
    borderWidth: 2,
    padding: 3,
    position: 'absolute',
    right: -5,
    top: -5,
    zIndex: 1,
  },
  container: {
    alignItems: 'center',
    borderRadius: 50,
    height: 50,
    justifyContent: 'center',
    width: 50,
  },
});

export default styles;
