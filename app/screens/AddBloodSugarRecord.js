import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'

import { RoundedButton } from '../components/Button'
import { MenuList } from '../components/List'
import { WhitePanel } from '../components/Panel'
import { FormInput } from '../components/Input'
import { submitbloodSugarRecord } from '../actions/bloodSugarRecord';

import Colors from '../constants/Colors'

class AddBloodSugarRecord extends Component {
	static navigationOptions = {
  	title: 'New Record'
  }

	constructor(props){
		super(props);

		this.state = {
			result: "",
			time: "Before Breakfast",
			date: "",
			notes: "",
		};
		this.submitForm = this.submitForm.bind(this)
	}

	submitForm() {
		this.props.addBloodSugarRecord(this.state)
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
          onChange={val => this.setState({ result: val })}
					suffix="mmol/L" />

				<FormInput.Picker
					label="Measured in"
					onChange={val => this.setState({ time: val })}
					item={time}
					value={this.state.time} />

				<FormInput
					label="Date"
					onChange={val => this.setState({ date: val })} />

				<FormInput
					label="Notes"
					onChange={val => this.setState({ notes: val })} />

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
	},
	addIcon:{
  	paddingTop: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
})

const mapDispatchToProps = disptach => ({
	addBloodSugarRecord: record => {
		disptach(submitbloodSugarRecord(record))
	}
})

export default connect(null, mapDispatchToProps)(AddBloodSugarRecord)
