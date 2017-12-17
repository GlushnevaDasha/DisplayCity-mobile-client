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

import {connect} from 'react-redux';

class Home extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 3, backgroundColor: 'powderblue'}} >
        <Text style = {{fontSize: 30}}>       </Text>
          <Text style = {{textAlign: 'center',color: '#FFFFFF',fontSize: 30}} >Температура воздуха</Text>
          <Text/>
          <Text style = {{textAlign: 'center',color: '#FFFFFF',fontSize: 60}} >23 °C</Text>
        </View>
        <View style={{flex: 3, backgroundColor: 'skyblue'}}>
        <Text style = {{fontSize: 30}}>       </Text>
         <Text style = {{textAlign: 'center',color: '#FFFFFF',fontSize: 30}}>Влажность воздуха</Text>
          <Text/>
          <Text style = {{textAlign: 'center',color: '#FFFFFF',fontSize: 60}} >65 %</Text>
        </View>
        <View style={{flex: 3, backgroundColor: 'steelblue'}}>
        <Text style = {{fontSize: 30}}>       </Text>
          <Text style = {{textAlign: 'center',color: '#FFFFFF',fontSize: 30}}>Давление</Text>
          <Text/>
          <Text style = {{textAlign: 'center',color: '#FFFFFF',fontSize: 60}}>{this.props.macAddres}</Text>
        </View>
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

const mapStateToProps = ({ reducers }) => ({ reducers });

export default connect(mapStateToProps)(Home);
