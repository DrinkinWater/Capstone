import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Avatar } from 'react-native-material-ui'
import ActionCable from 'react-native-actioncable'

import { API_ROOT } from '../config/api'
import { WhitePanel, GradientPanel } from '../components/Panel'
import { Textarea } from '../components/Input'
import { ProfileInfo } from '../components/List'
import { SOSButton, AddButton } from '../components/Button'
import Colors from '../constants/Colors'

class SOS extends Component {
	static navigationOptions = {
    header : null
	}
	constructor(props) {
		super(props);

		this.state = {
			message: "",
			loading: false
		};
	}
	componentWillMount() {
		let self = this
		this.cable = ActionCable.createConsumer(`${API_ROOT}/cable`)
		// ... Other code
		// debugger
		this.sosDispatcher = this.cable.subscriptions.create({
			channel: 'SosChannel',
			chat_room_id: '1'
		},
		{
			received(data) {
				if (!data.user) {
					alert(data.message)
				}
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

	renderSOSButton() {
		if (true) {
			return (
				<WhitePanel style={styles.panel}>
					<Text style={styles.title}>Request submitted</Text>
					<Text style={styles.subTitle}>You will be notified when hospital pick up your case.</Text>
				</WhitePanel>
			)
		} else {
			return (
				<View style={styles.addIcon}>
					<SOSButton
						onLongPress={() => {
							this.sosDispatcher.sendMessage(this.state.message)
							this.setState({ loading: true })
						}} />
				</View>
			)
		}
	}

	render() {
		const { navigate } = this.props.navigation;

		return (
      <View>
      <ScrollView>
				<GradientPanel style={styles.linearGradient} />
				{this.renderSOSButton()}
				<View style={styles.textbox}>
					<Textarea
						onChangeText={message => this.setState({ message })}
						placeholder="Type your extra notes here..." />
					</View>
			</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	panel: {
		padding: 20,
		margin: 20,
		marginTop: -135
	},
	linearGradient: {
		marginBottom: 0,
		paddingTop: 150,
	},
	addIcon:{
		marginTop: -150,
  	padding: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 26,
		fontWeight: '700',
		color: Colors.mainBlack,
	},
	subTitle: {
		marginBottom: 20,
		marginTop: 20,
		fontSize: 16,
		fontWeight: '100',
		color: Colors.grey
	},
	container: {
		padding: 30
	},
	textbox: {
		padding: 20
	}
})

const mapStateToProps = state => ({
	currentUser: state.auth.currentUser
})

export default connect(mapStateToProps)(SOS)
