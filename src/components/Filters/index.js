import React, { Component } from 'react';

import { View } from 'react-native';

import styles from './styles';

import FiltersItem from '~/components/FiltersItem';

import iconDance from '~/assets/images/icones/dance.png';
import iconLowerBody from '~/assets/images/icones/lower_body.png';
import iconUpperBody from '~/assets/images/icones/upper_body.png';
import iconYoga from '~/assets/images/icones/yoga.png';

export default class Filters extends Component {
  state = { activeIcon: '' };
  
  render() {
    return (
      <View style={styles.container}>
        <FiltersItem imageUrl={iconDance}  />
        <FiltersItem imageUrl={iconLowerBody}  />
        <FiltersItem imageUrl={iconUpperBody}  />
        <FiltersItem imageUrl={iconYoga} active />
      </View>
    );
  }
}
