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

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
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
          <Text style = {{textAlign: 'center',color: '#FFFFFF',fontSize: 60}}>750 мм</Text>
        </View>
      </View>
     /* <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}

            // Function to call when a new scene should be displayed           
            onForward={ () => {    
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />*/
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
/*import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View } from 'react-native';

import MyScene from './MyScene';

class SimpleNavigationApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}

            // Function to call when a new scene should be displayed           
            onForward={ () => {    
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    )
  }
}*/
