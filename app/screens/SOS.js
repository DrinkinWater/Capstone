import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native'
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
			<View addIcon>
					<SOSButton
								onPress={()=>navigate("AddBloodSugarRecord")}
								title="HELP ME!" />
			</View>
			)
	}
}

const styles = StyleSheet.create({
	addIcon:{
  	padding: 20,
		justifyContent: 'space-around',
		alignItems: 'center',
		
	}
	})