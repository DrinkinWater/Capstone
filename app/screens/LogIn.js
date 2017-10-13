import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { logInUser } from '../actions/auth'
import { NavigationActions } from 'react-navigation';
import { Button } from 'react-native-material-ui'

class LogIn extends Component{
  static navigationOptions = {
    header: null
  };
  constructor(props){
  	super(props);
  	this.state = {
      email: '',
      password: ''
    };
    this.handleLogIn = this.handleLogIn.bind(this)
  }

  handleLogIn() {
    const { email, password } = this.state;
    this.props.login({ email, password });
  }

  render(){
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Welcome To BendAid</Text>

        <TextInput
          placeholder="username"
          onChangeText={email => this.setState({ email })} />

        <TextInput
          secureTextEntry
          placeholder="password"
          onChangeText={password => this.setState({ password })} />

        <Button
          title="Log In"
          onPress={this.handleLogIn} />

        <TouchableOpacity onPress={() => navigate("SignUp")}><Text>I am new user</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("ForgotPassword")}><Text>Password Forgotten</Text></TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  profile: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center'
  }
})

const mapDispatchToProps = disptach => ({
  login: params => {
    disptach(logInUser(params))
  }
})

export default connect(null, mapDispatchToProps)(LogIn)
