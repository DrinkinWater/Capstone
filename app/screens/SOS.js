import React, { Component } from 'react'
import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from 'react-native'
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
			submitted: false,
			hospital: null
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
					self.setState({
						hospital: {
							name: "Hospital Stephie",
							plateNumber: data.message
						}
					})
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
		if (this.state.submitted) {
			return (
				this.renderHospital()
			)
		} else {
			return (
				<View style={styles.addIcon}>
					<SOSButton
						onLongPress={() => {
							this.sosDispatcher.sendMessage(this.state.message)
							this.setState({ submitted: true })
						}} />
				</View>
			)
		}
	}

	renderHospital() {
		if (this.state.hospital) {
			const { hospital } = this.state
			return (
				<WhitePanel style={styles.panel}>
					<View style={styles.top}>
						<Text style={[styles.smallTitle]}>We have found you a hospital!</Text>
						<Text style={styles.midTitle}>{hospital.name}</Text>
					</View>
					<View style={styles.bottom}>
					<Text style={[styles.subTitle, styles.bold]}>Number Plate</Text>
					<Text style={styles.subTitle}>{hospital.plateNumber}</Text>
						<Text style={[styles.subTitle, styles.bold]}>ETA</Text>
						<Text style={styles.subTitle}>5 mins</Text>
					</View>
				</WhitePanel>
			)
		} else {
			return (
				<WhitePanel style={styles.panel}>
					<View style={styles.top}>
						<Text style={styles.title}>Request submitted</Text>
						<Text style={styles.subTitle}>Please wait for a hospital to pick up your case</Text>
					</View>
					<View style={styles.bottom}>
						<Text style={[styles.subTitle, styles.bold]}>Your extra note</Text>
						<Text style={styles.subTitle}>{this.state.message.length ? this.state.message : "None"}</Text>
					</View>
				</WhitePanel>
			)
		}
	}

	render() {
		const { navigate } = this.props.navigation;

		return (
      <View style={styles.container}>
				<View style={styles.topDetails}>
					<GradientPanel style={styles.linearGradient} />
					{this.renderSOSButton()}
				</View>
				<View style={styles.bottomDetails}>
					{!this.state.submitted &&
						<View style={styles.textbox}>
							<Textarea
								onChangeText={message => this.setState({ message })}
								placeholder="Type your extra notes here..." />
						</View>
					}
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between'
	},
	panel: {
		padding: 20,
		margin: 20,
		marginTop: -100,
	},
	bottomDetails: {
		flex: 1
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
		marginBottom: 20,
	},
	midTitle: {
		fontSize: 26,
		// fontWeight: '700',
		color: Colors.mainBlack,
	},
	smallTitle: {
		fontSize: 16,
		marginBottom: 20,
		color: Colors.grey
	},
	subTitle: {
		fontSize: 16,
		marginBottom: 20,
		color: Colors.grey
	},
	bold: {
		color: Colors.mainBlack,
		marginBottom: 5,
	},
	top: {
		marginBottom: 20
	},
	textbox: {
		padding: 20
	}
})

const mapStateToProps = state => ({
	currentUser: state.auth.currentUser
})

export default connect(mapStateToProps)(SOS)
