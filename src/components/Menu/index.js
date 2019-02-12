import React from 'react';

import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Menu = () => (
  <TouchableOpacity style={styles.button}>
    <Icon name="bars" size={24} color="#FFF" />
  </TouchableOpacity>
);

export default Menu;
