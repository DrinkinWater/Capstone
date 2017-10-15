import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, ScrollView } from 'react-native'
import { Avatar } from 'react-native-material-ui'
import { WhitePanel } from '../components/Panel'
import { ProfileInfo } from '../components/List'
import {SOSButton} from '../components/Button'

export default class SOS extends Component {
	static navigationOptions = {
    header : null
	}
	render() {
		const { navigate } = this.props.navigation;

		return (
      <View>
      <ScrollView>
				<View style={styles.addIcon}>
					<SOSButton
						onLongPress={() => alert('Request Sent')}
						title="HELP ME!" />
				</View>
				<View style={styles.container}>
				
					<Text style={styles.title}>Name:</Text>
					<Text>Joseph Lim</Text>
					<Text style={styles.title}>Age:</Text>
					<Text>45 years old</Text>
					<Text style={styles.title}>NRIC:</Text>
					<Text>761112-10-1121</Text>
					<Text style={styles.title}>Gender:</Text>
					<Text>Male</Text>
					<Text style={styles.title}>Blood Type:</Text>
					<Text>AB-</Text>
					<Text style={styles.title}>Active Problem:</Text>
					<Text>Asthma</Text>
					<Text>Obesity</Text>
					<Text style={styles.title}>Allergies:</Text>
					<Text>Caffeine</Text>
					<Text style={styles.title}>Current Medicine:</Text>
					<Text>Panadol</Text>
					<Text style={styles.title}>Emergency Contact</Text>
					<Text>011-111-1111</Text>
       
				</View>
				 <View style={styles.textbox}>
				 <WhitePanel>
				 <Text>Notes</Text>
				 <TextInput/>
				 </WhitePanel>
				 </View>
			</ScrollView>
			</View>	
			)
	}
}

const styles = StyleSheet.create({
	addIcon:{
  	padding: 20,
		justifyContent: 'center',
		alignItems: 'center',

	},
		title: {
			fontSize: 15,
			color: 'black',
			
	},
		container: {
			padding:30
	},
		textbox: {
			padding:10
	}
	})
