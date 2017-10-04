import React,{Component} from 'react'
import {View,Text,TextInput,TouchableOpacity,Button} from 'react-native'
export default class MedicalRecords extends Component{
	render(){
    const {navigate} = this.props.navigation;
    return( 
    	<View>
    	<Text>Medical Records</Text>
    	<Text>2017</Text>
    	</View>
    	)
  }
}