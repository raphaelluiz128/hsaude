import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Image, TouchableOpacity, View } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Filters from '~/components/Filters';

import styles from './styles';


export default class FiltersItem extends Component {
  
  state = {
    active : this.props.active,
  };

  filterEx = () => {

    if (this.state.active == true) {
      this.setState({ active: false });
    } else {
      this.setState({ active: true });
    }
  };

  render() {
    const { imageUrl } = this.props;
    const { active } = this.state;
    return (
      <TouchableOpacity onPress={this.filterEx}>
        {active && (
          <View style={styles.badge}>
            <Icon
              name="check"
              size={10}
              color="#fff"
            />
          </View>
        )}
        <LinearGradient
          colors={['#7F38F4', '#FD3C29']}
          style={styles.container}
        >
          {console.tron.log(imageUrl)}
          <Image source={imageUrl} />
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}


FiltersItem.defaultProps = {
  active: null,
  imageUrl: '',
};


FiltersItem.propTypes = {
  imageUrl: PropTypes.number,
  active: PropTypes.bool,
};
