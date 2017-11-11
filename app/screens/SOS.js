import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Avatar } from 'react-native-material-ui'

import { WhitePanel } from '../components/Panel'
import { ProfileInfo } from '../components/List'
import { SOSButton, AddButton } from '../components/Button'
import ActionCable from 'react-native-actioncable'

class SOS extends Component {
	static navigationOptions = {
    header : null
	}
	componentWillMount() {
		let self = this
		this.cable = ActionCable.createConsumer('http://10.0.2.2:8080/cable')
		// ... Other code
		this.sosDispatcher = this.cable.subscriptions.create({
			channel: 'SosChannel',
			chat_room_id: '1'
		},
		{
			received(data) {
				console.log('Received data:', data)
			},
			sendMessage(message) {
				this.perform('send_message', {
					message,
					chat_room_id: 1,
					user: self.props.currentUser
				})
			}
		})
	}

	render() {
		const { navigate } = this.props.navigation;

		return (
      <View>
      <ScrollView>
				<View style={styles.addIcon}>
					<SOSButton
						onLongPress={() => {
							this.sosDispatcher.sendMessage('hellof')
						}}
						title="HELP ME!" />
				</View>
				 <View style={styles.textbox}>
					 <WhitePanel>
						 <Text>Notes</Text>
						 <TextInput/>
					 </WhitePanel>
				 </View>
			</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	addIcon:{
  	padding: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
		title: {
			fontSize: 15,
			color: 'black',
	},
		container: {
			padding:30
	},
		textbox: {
			padding:10
	}
})

const mapStateToProps = state => ({
	currentUser: state.auth.currentUser
})

export default connect(mapStateToProps)(SOS)
