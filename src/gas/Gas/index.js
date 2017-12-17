/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow*/
import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class Gas extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
          <Text style = {{textAlign: 'center',color: '#FFFFFF',fontSize: 30}} >Температура воздуха</Text>
      </View>
    );
  }
}
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
}); 
