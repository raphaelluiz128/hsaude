import React from 'react';
import PropTypes from 'prop-types';

import { Image, TouchableOpacity, View } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';


filterEx = () => {
  console.warn('acessou');
}
const FiltersItem = ({ imageUrl, active }) => (
  <TouchableOpacity onPress={this.filterEx}>
    {active && (
      <View style={styles.badge}>
        <Icon name="check" size={10} color="#fff" />
      </View>
    )}
    <LinearGradient colors={['#7F38F4', '#FD3C29']} style={styles.container}>
      {console.tron.log(imageUrl)}
      <Image source={imageUrl} />
    </LinearGradient>
  </TouchableOpacity>
);


FiltersItem.defaultProps = {
  active: null,
  imageUrl: '',
};

FiltersItem.propTypes = {
  imageUrl: PropTypes.number,
  active: PropTypes.bool,
};

export default FiltersItem;
