import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Button} from 'react-native'
import { Avatar } from 'react-native-material-ui';

export default class UserProfile extends Component{
	static navigationOptions = {
    header: null
  };
	render(){
    const {navigate} = this.props.navigation;
    return(
    	<View style={styles.profile}>
				<Avatar icon="person" />
	    	<Text style={styles.title}>Joseph Lim</Text>
	    	<Text>45 years old</Text>
	    	<Button title ="General Information"/>
	    	<Button onPress={() => navigate("MedicalRecords")} title="My records >"/>
	    	<Button title="Blood Sugar Records >"/>

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
		color: 'white',
		textAlign: 'center'
	}
})
