import React,{Component} from 'react'
import {View,Text,TextInput,TouchableOpacity,Button,StyleSheet} from 'react-native'
import { Avatar } from 'react-native-material-ui'
export default class UserDetails extends Component{
	
render(){
	const {navigate} = this.props.navigation;
	return (
	<View style={styles.profile}>
	<Avatar icon="person" />
	<Text> 011212131</Text>
	<Text> Active Problem </Text>
	<Text> Allergies </Text>
	<Text> Current Medicine</Text>
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