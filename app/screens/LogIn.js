import React,{Component} from 'react'
import {View,StyleSheet, Text,TextInput,TouchableOpacity,Button} from 'react-native'
export default class LogIn extends Component{
  static navigationOptions = {
    header: null
  };
  render(){
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>Welcome To BendAid</Text>
        <TextInput placeholder="username"/>
        <TextInput secureTextEntry placeholder="password"/>
        <Button title="Log In"/>
        <TouchableOpacity onPress={() => navigate("SignUp")}><Text>I am new user</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("ForgotPassword")}><Text>Password Forgotten</Text></TouchableOpacity>

      </View>
    )
  }
}
