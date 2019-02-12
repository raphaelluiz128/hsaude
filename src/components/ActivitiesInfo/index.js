import React from 'react';

import { View, Text, Image } from 'react-native';

import Bike from '~/assets/images/icones/bike.png';
import Balance from '~/assets/images/icones/balance.png';
import Time from '~/assets/images/icones/time.png';

import styles from './styles';

const ActivitiesInfo = () => (
  <View style={styles.container}>
    <View style={styles.info}>
      <Image style={styles.icon} source={Bike} />
      <Text style={styles.iconText}>400 Kcal</Text>
    </View>
    <View style={styles.info}>
      <Image style={styles.icon} source={Time} />
      <Text style={styles.iconText}>30 m</Text>
    </View>
    <View style={styles.info}>
      <Image style={styles.icon} source={Balance} />
      <Text style={styles.iconText}>52 Kg</Text>
    </View>
  </View>
);

export default ActivitiesInfo;
