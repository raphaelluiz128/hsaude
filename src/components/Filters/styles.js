import { StyleSheet } from 'react-native';

import { colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.greenDark,
    borderRadius: 10,
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-around',
    marginBottom: 30,
  },
});

export default styles;
