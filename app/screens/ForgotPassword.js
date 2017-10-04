
import React,{Component} from 'react'
import {View,Text,TextInput,TouchableOpacity,Button} from 'react-native'
export default class ForgotPassword extends Component{
  render(){
    const {navigate} = this.props.navigation;
    return(
      <View>
        <Text>Forgot Password</Text>
        <Text>Enter your emial and follow the instructions to reset your password</Text>
        <TextInput/>
        <Button title="Send"/>
      </View>
    )

  }

}
