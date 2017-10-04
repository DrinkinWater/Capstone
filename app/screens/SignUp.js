import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native'

export default class SignUp extends Component {
  render(){
    return(
      <View>
        <Text>Sign Up</Text>
        <Text>Username</Text>
        <TextInput/>
        <Text>Email</Text>
        <TextInput/>
        <Text>NRIC (Optional) </Text>
        <TextInput/>
        <Text>Password</Text>
        <TextInput secureTextEntry/>
        <Text secureTextEntry>Confirm Password</Text>
        <TextInput/>
        <Button title="Done"/>
      </View>
    )
  }
}
