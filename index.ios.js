/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';
import {
  AppRegistry,
  // Button,
  // ScrollView,
  // StyleSheet,
  // Text,
  // View
} from 'react-native';

import MyHomeScreen from './RNsrc/router/home';
import Detail from './RNsrc/router/detail';

const JiuTian = StackNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Detail: {
    path: 'people/:name',
    screen: Detail,
  },
  // Mine: {
  //   screen: Mine,

  // },
  // Ask: {
  //   screen: MyHomeScreen,

  // }
});

export default JiuTian;

AppRegistry.registerComponent('JiuTian', () => JiuTian);
