import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'

import { WhitePanel } from '../components/Panel'
import { ProfileInfo } from '../components/List'
import Colors from '../constants/Colors'

export default class MedicalRecord extends Component {
	static navigationOptions = {
    title: 'Your Record'
  };

  render() {
    const { record } = this.props.navigation.state.params;

	  return (
		  <View style={styles.container}>
				<WhitePanel style={styles.panel}>
					<ProfileInfo
						title={"Title"}
						content={record.title || '-'} />
					<ProfileInfo
						title={"Date"}
						content={record.date || '-'} />
					<ProfileInfo
						title={"Notes"}
						content={record.notes || '-'} />
				</WhitePanel>
				<Image
					source={{ uri: record.image }}
					style={styles.image}
					resizeMode="contain" />
      </View>
    )
  }
}

// To make image full width
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
	container: {
		padding: 15
	},
	panel: {
		padding: 15
	},
	image: {
		width: width - 30,
		height: 250,
		marginTop: 15,
		backgroundColor: Colors.white
	}
})
