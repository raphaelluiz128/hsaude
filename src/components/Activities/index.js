import React from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, Image, ScrollView,
} from 'react-native';

import ActivitiesInfo from '~/components/ActivitiesInfo';

import styles from './styles';

const Activities = ({ imageUrl, title, activity }) => (
  <View style={styles.container}>
    <View style={styles.icon}>
      <View style={styles.circle} />
      <Image source={imageUrl} style={styles.image} />
    </View>
    <View style={styles.infos}>
      <Text style={styles.title}>{title}</Text>
      <View>
        <ActivitiesInfo data={activity} />
      </View>
    </View>
  </View>
);

Activities.defaultProps = {
  imageUrl: 0,
  title: '',
  activity: {},
};

Activities.propTypes = {
  imageUrl: PropTypes.number,
  title: PropTypes.string,
  activity: PropTypes.objectOf(PropTypes.object),
};

export default Activities;
