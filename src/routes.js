import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import { colors } from '~/styles';

import Home from '~/pages/Home';

import Menu from '~/components/Menu';
import Configuration from '~/components/Configuration';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home: { screen: Home },
    },
    {
      defaultNavigationOptions: {
        headerLeft: <Menu />,
        headerRight: <Configuration />,
        headerStyle: {
          backgroundColor: colors.greenDarker,
          borderBottomWidth: 0,
        },
        headerTintColor: colors.white,
      },
    },
  ),
);

export default Routes;
