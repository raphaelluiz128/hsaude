import React, { Component } from 'react';

import { View } from 'react-native';

import styles from './styles';

import FiltersItem from '~/components/FiltersItem';

import iconDance from '~/assets/images/icones/dance.png';
import iconLowerBody from '~/assets/images/icones/lower_body.png';
import iconUpperBody from '~/assets/images/icones/upper_body.png';
import iconYoga from '~/assets/images/icones/yoga.png';

export default class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = { active: true };
  }

  render() {
    // const active  = this.state;
    return (
      <View style={styles.container}>
        <FiltersItem imageUrl={iconDance} active={ this.state.active } />
        <FiltersItem imageUrl={iconLowerBody} active={ this.state.active } />
        <FiltersItem imageUrl={iconUpperBody} active={ this.state.active } />
        <FiltersItem imageUrl={iconYoga} active={ this.state.active } />
      </View>
    );
  }
}
