import React, { Component } from 'react';

import { View, StatusBar, ScrollView } from 'react-native';

import Filters from '~/components/Filters';
import Activities from '~/components/Activities';
import styles from './styles';

import data from '~/data';

const gymImage = require('~/assets/images/gym.png');
const cyclingImage = require('~/assets/images/cycling.png');
const runningImage = require('~/assets/images/running.png');
const yogaImage = require('~/assets/images/yoga.png');



export default class Home extends Component {
  static navigationOptions = {
    title: 'DETAILS',
  };

  state = {
    activities: {
      running: {
        calorie: '400 kcal',
        time: '30 m',
        balance: '52 Kg',
      },
      cycling: {
        calorie: '630 kcal',
        time: '40 m',
        balance: '52 kg',
      },
      gym: {
        calorie: '950 kcal',
        time: '1 h',
        balance: '52 kg',
      },
      yoga: {
        calorie: '950 kcal',
        time: '1 h',
        balance: '52 kg',
      },
    },
  };


  render() {
    const { activities } = this.state;
    console.log('hum:', data);
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Filters data={data.filters} />
        <ScrollView>
          <Activities imageUrl={runningImage} title="Corrida" activity={activities} />
          <Activities imageUrl={cyclingImage} title="Bicicleta" activity={activities} />
          <Activities imageUrl={gymImage} title="Musculação" activity={activities} />
          <Activities imageUrl={yogaImage} title="Yoga" activity={activities} />
        </ScrollView>
      </View>
    );
  }
}
