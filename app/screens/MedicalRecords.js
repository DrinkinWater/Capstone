import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import { connect } from 'react-redux'

import { AddButton } from '../components/Button'
import { RecordList } from '../components/List'

class MedicalRecords extends Component {
	static navigationOptions = {
    title: 'MedicalRecords'
  }

	constructor(props){
		super(props);

		this.addNewRecord = this.addNewRecord.bind(this)
	}

	addNewRecord() {
		let options = {
		  title: 'Add Photo',
		  storageOptions: {
		    skipBackup: true,
		    path: 'images'
		  }
		};

		ImagePicker.showImagePicker(options, (response) => {
		  console.log('Response = ', response);

		  if (response.didCancel) {
		    console.log('User cancelled image picker');
		  }
		  else if (response.error) {
		    console.log('ImagePicker Error: ', response.error);
		  }
		  else {
		    // let source = { uri: response.uri };

		    // You can also display the image using data:
		    // let source = { uri: 'data:image/jpeg;base64,' + response.data };

				const { navigate } = this.props.navigation;

				navigate("AddNewRecord", {uri: response.uri})
		  }
		});
	}

	render() {
    return (
    	<View style = {styles.container}>
	    	<Text>2017</Text>
				{this.props.medicalRecords.map((record, i) => (
					<RecordList
						key={i}
						record={record} />
				))}
	    	<View style={styles.addIcon}>
	  			<AddButton
						onPress={() => this.addNewRecord()}
						 />
	  		</View>
    	</View>
    	)
  }
}

const styles = StyleSheet.create({
	addIcon: {
  	padding: 20,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	container: {
		padding : 30
	}
})

const mapStateToProps = state => ({
	medicalRecords: state.medicalRecords
})

export default connect(mapStateToProps)(MedicalRecords)
