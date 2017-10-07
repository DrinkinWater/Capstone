import React,{Component} from 'react'
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button } from 'react-native-material-ui'

export default class Maps extends Component{
	render(){
		return(
			<View>
				<View style={styles.searchbar}>			
					<Icon style={styles.searchicon} name="search" />			
					<TextInput style={styles.input} placeholder="Search"/>
				</View>
				<View style={styles.buttons}>
					<Button style={styles.space} primary text ="Hospital"/>
					<Button style={styles.space} primary text="Clinic"/>
				</View>
			</View>
			)
		}
	}
	const styles = StyleSheet.create({
  searchbar: {   
		flexDirection:"row",
  	alignItems: 'center',
  	padding:5
  },
  searchicon:{
  	padding:5
  },
  input:{
  	flex: 1
 	 },
 	 buttons:{
 	 	flexDirection:"row",
 	 	justifyContent: 'center',
 	 },
 	 space:{
 	 	margin:5
 	 }
	}
)