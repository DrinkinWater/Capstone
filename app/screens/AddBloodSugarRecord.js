import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'

import { RoundedButton } from '../components/Button'
import { MenuList } from '../components/List'
import { WhitePanel } from '../components/Panel'
import { FormInput } from '../components/Input'
import { Dropdown } from 'react-native-material-dropdown';

import Colors from '../constants/Colors'

export default class AddBloodSugarRecord extends Component {
	static navigationOptions = {
  	title: 'New Record'
  }

	constructor(props){
		super(props);
		
		this.state = {
			sugarConcentration: "",
			measuredIn: "",
			date: "",
			notes: "",
		};
	}

	render() {

	  let time = {
			'Before Breakfast': 'Before Breakfast',
			'Before Lunch': 'Before Lunch',
			'Before Dinner': 'Before Dinner'
		};

		return (

	    <View style={styles.container}>
				<FormInput.WithSuffix
          label="Sugar Concentration"
          onChange={val => this.setState({ sugarConcentration: val })}
					suffix="mmol/L" />

				<FormInput.Picker
					label="Measured in"
					onChange={val => this.setState({ measuredIn: val })}
					item={time} />

				<FormInput
					label="Date"
					onChange={val => this.setState({ date: val })} />

				<FormInput
					label="Notes"
					onChange={val => this.setState({ notes: val })} />

      </View>
		)
	}
}

const styles = StyleSheet.create({

	container: {
		padding: 20
	},
	input: {
    flexDirection : 'row',
    justifyContent:'space-around',
    padding:20
	},
	space: {
		padding:20
	},
	smallTitle: {
		padding:5,
		fontSize: 15,
	}
	})
