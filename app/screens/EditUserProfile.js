import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Avatar } from 'react-native-material-ui'
import { WhitePanel } from '../components/Panel'
import { FormInput } from '../components/Input'
import { RoundedButton } from '../components/Button'

class EditUserProfile extends Component {
	static navigationOptions = {
  	title: 'Edit Profile'
  }

	constructor(){
		super()
		this.state = {
			ic: '',
			gender: '',
			height: '',
			weight: '',
			blood_type: '',
			active_problem: '',
			allergies: '',
			current_medication: ''
		}
	}

  render() {
		const { navigate } = this.props.navigation;
		const { user } = this.props;

		const details = {
			'NRIC': 'ic',
			'Gender': 'gender',
			'Height': 'height',
			'Weight': 'weight',
			'Blood Type': 'blood_type',
			'Active Problem': 'active_problem',
			'Allergies': 'allergies',
			'Current Medicine': 'current_medication'
		}

		return (
			<View style={styles.profile}>
				<View style={styles.top}>
					<View style={styles.avatar}>
						<Avatar icon="person" size={60} />
					</View>
					<View style={styles.topDetails}>
						<Text style={styles.title}>Joseph Lim</Text>
						<Text style={styles.subTitle}>70 years old</Text>
						<Text>011212131</Text>
					</View>
				</View>
				<View style={styles.bottom}>
					<WhitePanel style={styles.whitePanel}>
						<ScrollView>
							{Object.keys(details).map((detail, i) => (
								<FormInput
									label={detail}
									onChangeText={text => this.setState({ [details[detail]]: text })}
									value={user[details[detail]]}
									key={i} />
							))}
						</ScrollView>
					</WhitePanel>
					<View style={styles.addIcon}>
						<RoundedButton onPress={() => alert(this.state.ic)} title="Save" />
          </View>
				</View>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	addIcon:{
  	padding: 20,
		justifyContent: 'space-between',
		alignItems: 'center',

	},
	profile: {
		justifyContent: 'space-between',
		alignItems: 'stretch',
		padding: 15,
		flex: 1
	},
	top: {
		paddingLeft: 10,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'stretch',
	},
	avatar: {
		marginRight: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	bottom: {
		flex: 8,
		marginTop: 15
	},
	whitePanel: {
		padding: 15,
		flex: 8
	},
	title: {
		fontSize: 20,
		color: 'black',
		fontWeight: '700'
	}
})

const mapStateToProps = state => ({
	user: state.auth.currentUser
})

export default connect(mapStateToProps)(EditUserProfile)
