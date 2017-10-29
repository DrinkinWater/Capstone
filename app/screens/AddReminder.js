import React,{Component} from 'react'
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet,ScrollView } from 'react-native'
import { RoundedButton } from '../components/Button'
import Colors from '../constants/Colors'
import  Icon from 'react-native-vector-icons/Ionicons' ;
import { WhitePanel } from '../components/Panel'

export default class AddReminder extends Component {
  static navigationOptions = {
    title: 'New Reminder'
  }

  render() {
  	const {navigate} = this.props.navigation;
  	return(
  		<View>
	  		<WhitePanel style={styles.whitePanel}>
	  		<View>
	  			<Text style={styles.title}>Title</Text>
	  			<TextInput/>
	  			<Text style={styles.title}>Location</Text>
	  			<TextInput/>
	  			<Text style={styles.title}>Date</Text>
	  			<TextInput/>
	  			<Text style={styles.title}>Time</Text>
	  			<TextInput/>
	  		</View>
	  		</WhitePanel>
	  		<View style={styles.addIcon}>
		  		<RoundedButton
								onPress={() => alert('Saved')}
								title="Save" />

				</View>
			</View>
  		)
  }
 }

 const styles = StyleSheet.create({
	whitePanel: {
		padding: 15,
	},
	title: {
		fontSize: 15,
		color: 'grey',
	},
	addIcon:{
  	padding: 20,
		justifyContent: 'center',
		alignItems: 'center',

	},
})
