import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View
} from 'react-native';
import {
  Button,
  Container,
  Content,
  Card,
  CardItem,
  Left,
  Right,
  Center,
  Body,
  Thumbnail,
  Spinner,
  Icon,
  Header,
  Text,
  Form,
  Item,
  Label,
  Input
} from 'native-base';

import {connect} from 'react-redux';
import {selectMacAddres} from '../../actions';

console.log();
const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  button: {
    width: 150,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      error: ''
    };
  }

  _onPressButton(params) {
      console.log(params);
      console.log(this.state);
      // const fileContents = await FileSystem.readFile('my-directory/test.txt');
      // console.log(`read from file: ${fileContents}`);
      const { navigate } = this.props.navigation;
      this.props.selectMacAddres('eeeeee');
      navigate('Home');
      console.log("Post");
  }

  _onPressButton2() {
    console.log(this.state);
    const { navigate } = this.props.navigation;
    console.log("Post");
    fetch(`http://192.168.0.101:3000/user`, {
      method: 'POST',
      body: JSON.stringify({
          login: this.state.login,
          password: this.state.password,
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }.then((response) => {
        if (response === {}) {
          var error = 'login is invalid';
          this.setState({error});
        } else {
          this.props.selectMacAddres(response.body);
          navigate('Home');
        }
      })
    })
  }

   render() {
    return (

      <Container>
        <Content>
          <Item style={{ alignSelf: "center", width: 300, marginTop: 10}}>
            <Input
              placeholder="Login"
              onChangeText={(login) => this.setState({login})}
            />
          </Item>
          <Item style={{ alignSelf: "center", width: 300, margin: 10}}>
            <Input
              style={{ alignSelf: "center", width: 300, margin: 2}}
              placeholder="Password"
              onChangeText={(password) => this.setState({password})}
            />
          </Item>
          <View>
            <Button style={{ alignSelf: "center", width: 300, margin: 10}} onPress={() =>
              this._onPressButton("navigate")} block info>
              <Text>Login</Text>
            </Button>
          </View>
          <View>
            <Button style={{ alignSelf: "center", width: 300, margin: 10}} onPress={() =>
              this._readDer()} block info>
              <Text>{this.props.reducers.selectedKeyIndex}}</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ reducers }) => ({ reducers });

export default connect(mapStateToProps,{selectMacAddres})(Login);