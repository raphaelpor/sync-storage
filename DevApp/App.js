/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import SyncStorage from './sync-storage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

class App extends Component<{}> {
  constructor() {
    super();
    this.state = {
      data: '',
      loading: true,
    };
  }

  async componentWillMount() {
    const storageKeys = ['module-name'];
    await SyncStorage.init(storageKeys);
    const data = SyncStorage.get('module-name');
    this.setState({ data, loading: false });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.loading ? 'Loading...' : `Welcome to ${this.state.data}!`}
        </Text>
      </View>
    );
  }
}

export default App;
