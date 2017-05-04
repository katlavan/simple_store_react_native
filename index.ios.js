/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} from 'react-native';


import Main from './App/Components/Main'

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111'
  }
});

export default class SimpleStoreReact extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
        title: 'Simple Store React',
        component: Main
        }}
        style={styles.container}
      />
    );
  }
}

AppRegistry.registerComponent('SimpleStoreReact', () => SimpleStoreReact);
