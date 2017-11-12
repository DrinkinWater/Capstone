import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Avatar } from 'react-native-material-ui'
import ActionCable from 'react-native-actioncable'
import PopupDialog from 'react-native-popup-dialog';

import { API_ROOT } from '../config/api'
import { WhitePanel, GradientPanel } from '../components/Panel'
import { ProfileInfo } from '../components/List'
import { SOSButton, AddButton } from '../components/Button'

class SOS extends Component {
	static navigationOptions = {
    header : null
	}
	constructor(props) {
		super(props);
		this.state = {
			message: ""
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

	render() {
		const { navigate } = this.props.navigation;

		return (
      <View>
      <ScrollView>
				<GradientPanel style={styles.linearGradient} />
				<View style={styles.addIcon}>
					<SOSButton
						onLongPress={() => {
							// this.popupDialog.show();
							this.sosDispatcher.sendMessage(this.state.message)
						}} />
				</View>
			  <PopupDialog
			    ref={(popupDialog) => { this.popupDialog = popupDialog; }}
			  >
			    <View>
			      <Text>Hello</Text>
			    </View>
			  </PopupDialog>
				 <View style={styles.textbox}>
					 <WhitePanel>
						 <Text>Notes</Text>
						 <TextInput onChangeText={message => this.setState({ message })}/>
					 </WhitePanel>
				 </View>
			</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
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
