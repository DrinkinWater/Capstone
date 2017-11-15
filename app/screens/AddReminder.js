import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import { RoundedButton } from '../components/Button'
import { WhitePanel } from '../components/Panel'
import { FormInput } from '../components/Input'
import { connect } from 'react-redux'
import { submitReminder } from '../actions/reminder'


class AddReminder extends Component {
  static navigationOptions = {
    title: 'New Reminder'
  }

  constructor(props){
  	super(props);
  	this.state = {
      name: "",
      location: "",
      date: "",
      time: ""
    };

    this.submitForm = this.submitForm.bind(this)
  }

  submitForm() {
		this.props.addReminder(this.state)
	}

  render() {
  	const { navigate } = this.props.navigation;

  	return (
  		<View style={styles.container}>
        <FormInput
          label="Title"
          onChange={val => this.setState({ name: val })} />
        <FormInput
          label="Location"
          onChange={val => this.setState({ location: val })} />
          <FormInput
          label="Date"
          onChange={val => this.setState({ date: val })} />
        <FormInput
          label="Time"
          onChange={val => this.setState({ time: val })} />

	  		<View style={styles.addIcon}>
		  		<RoundedButton
						onPress={() => this.submitForm()}
						title="Save" />
				</View>
			</View>
  		)
  }
 }

 const styles = StyleSheet.create({
	container: {
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

const mapDispatchToProps = disptach => ({
	addReminder: reminder => {
		disptach(submitReminder(reminder))
	}
})

export default connect(null, mapDispatchToProps)(AddReminder)
