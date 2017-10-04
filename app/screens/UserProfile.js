import React,{Component} from 'react'
import {View,Text,TextInput,TouchableOpacity,Button} from 'react-native'
export default class UserProfile extends Component{
	static navigationOptions = {
    header: null
  };
	render(){
    const {navigate} = this.props.navigation;
    return(
    	<View>
    	<Text>User Profile</Text>
    	<Text>Joseph Lim</Text>
    	<Text>45 years old</Text>
    	<Button title ="General Information"/>
    	<Button onPress={() => navigate("MedicalRecords")} title="My records >"/>
    	<Button title="Blood Sugar Records >"/>

    	</View>
    	)
    }
}