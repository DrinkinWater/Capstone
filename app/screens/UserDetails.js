import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-material-ui'
import { WhitePanel } from '../components/Panel'
import { ProfileInfo } from '../components/List'

export default class UserDetails extends Component {
	static navigationOptions = {
    header: () => null,
  }
	render() {
		const { navigate } = this.props.navigation;

		return (
			<View style={styles.profile}>
				<View style={styles.top}>
					<View style={styles.avatar}>
						<Avatar icon="person" size={60} />
					</View>
					<View style={styles.topDetails}>
						<Text style={styles.title}>Joseph Lim</Text>
						<Text style={styles.subTitle}>45 years old</Text>
						<Text>011212131</Text>
					</View>
				</View>
				<View style={styles.bottom}>
					<WhitePanel style={styles.whitePanel}>
						<ProfileInfo
							title="Active Problem"
							content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lectus porttitor, porta metus vel, hendrerit enim." />
						<ProfileInfo
							title="Allergies"
							content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lectus porttitor, porta metus vel, hendrerit enim." />
						<ProfileInfo
							title="Current Medicine"
							content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lectus porttitor, porta metus vel, hendrerit enim." />
					</WhitePanel>
				</View>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	profile: {
		justifyContent: 'space-between',
		alignItems: 'stretch',
		padding: 15
	},
	top: {
		paddingLeft: 10,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		// flex: 2
	},
	avatar: {
		marginRight: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	topDetails: {
		// flex: 5
	},
	bottom: {
		// flex: 1
		marginTop: 15
	},
	whitePanel: {
		padding: 15,
	},
	title: {
		fontSize: 20,
		color: 'black',
		fontWeight: '700'
	}
})
