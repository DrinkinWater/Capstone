import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native'
import { connect } from 'react-redux'
import { signOutUser } from '../actions/auth'

class UserProfile extends Component{
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

				<TouchableOpacity onPress={this.props.signOut}>
					<Text>Sign Out</Text>
				</TouchableOpacity>

    	</View>
    	)
    }
}

const mapDispatchToProps = disptach => ({
	signOut: () => {
		disptach(signOutUser())
	}
})

export default connect(null, mapDispatchToProps)(UserProfile)
