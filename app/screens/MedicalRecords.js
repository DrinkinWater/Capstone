import React,{Component} from 'react'
import {View,Text,TextInput,TouchableOpacity,Button} from 'react-native'
export default class MedicalRecords extends Component{
	static navigationOptions = {
    title: 'MedicalRecords'
  }
	render(){
    const {navigate} = this.props.navigation;
    return( 
    	<View>
    	<Text>2017</Text>
    	</View>
    	)
  }
}