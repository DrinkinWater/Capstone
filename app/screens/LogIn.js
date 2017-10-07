import React,{Component} from 'react'
import {View,StyleSheet, Text,TextInput,TouchableOpacity} from 'react-native'
import { Button } from 'react-native-material-ui'
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
        <Button primary text="Log In"/>
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
