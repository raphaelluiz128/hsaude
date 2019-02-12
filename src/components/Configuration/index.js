import React from 'react';

import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Configuration = () => (
  <TouchableOpacity style={styles.button}>
    <Icon name="sun-o" size={24} color="#FFF" />
  </TouchableOpacity>
);

export default Configuration;
