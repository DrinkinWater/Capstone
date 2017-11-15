import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import { WhitePanel } from '../components/Panel'
import { ProfileInfo } from '../components/List'

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
					<Text>{record.image}</Text>
				</WhitePanel>
				<Image
					source={{ uri: record.image }}
					style={styles.image} />

      </View>
      )
    }
  }

const styles = StyleSheet.create({
	container: {
		padding: 15
	},
	panel: {
		padding: 15
	},
	image: {
		width: 400,
		height: 200
	}
})
