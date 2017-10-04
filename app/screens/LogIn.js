import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native'
import { connect } from 'react-redux'
import { logInUser } from '../actions/auth'

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

const mapDispatchToProps = disptach => ({
  login: params => {
    disptach(logInUser(params))
  }
})

export default connect(null, mapDispatchToProps)(LogIn)
