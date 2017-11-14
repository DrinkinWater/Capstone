import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'

import { WhitePanel } from '../components/Panel'
import { RoundedButton } from '../components/Button'
import { MenuList } from '../components/List'
import { FormInput } from '../components/Input'
import { submitMedicalRecord } from '../actions/medicalRecord'

class AddNewRecord extends Component {
	static navigationOptions = {
    title: 'Add New Record'
  };

	constructor(props){
		super(props);

		this.state = {
			title: "",
			date: "",
			notes: ""
		};

		this.submitForm = this.submitForm.bind(this)
	}

	submitForm() {
		let medicalRecord = {
			...this.state,
			image: this.props.navigation.state.params.uri
		}

		this.props.addMedicalRecord(medicalRecord)
	}

  render() {
    const { uri } = this.props.navigation.state.params;

	  return (
		  <View style = {styles.container}>
				<Image
					source={{ uri }}
					style={styles.uploadedImage} />
		    <View style ={styles.top}>
					<FormInput
						label="Title"
						onChange={val => this.setState({ title: val })} />
					<FormInput
						label="Date"
						onChange={val => this.setState({ date: val })} />
					<FormInput
						label="Notes"
						onChange={val => this.setState({ notes: val })} />
        </View>

	      <View style = {styles.bottom}>
          <RoundedButton
						title="Add"
						onPress={e => this.submitForm()} />
		    </View>
      </View>
      )
    }
  }

const styles = StyleSheet.create({
	whitePanel: {
		padding: 15
	},
	title2:{
		fontSize: 15,
	},
	bottom: {
		padding: 25
	},
	picIcon: {
    padding: 30
	},
	container :{
		padding: 20
	},
	uploadedImage: {
		width: 100,
		height: 100,
		marginBottom: 20
	}

})

const mapDispatchToProps = disptach => ({
	addMedicalRecord: medicalRecord => {
		disptach(submitMedicalRecord(medicalRecord))
	}
})

export default connect(null, mapDispatchToProps)(AddNewRecord)
