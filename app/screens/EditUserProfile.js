import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Avatar } from 'react-native-material-ui'
import { WhitePanel } from '../components/Panel'
import { FormInput } from '../components/Input'
import { RoundedButton } from '../components/Button'
import { updateUser } from '../actions/user'

class EditUserProfile extends Component {
	static navigationOptions = {
  	title: 'Edit Profile'
  }

	constructor(){
		super()

		this.state = {}
		this.submitForm = this.submitForm.bind(this)
	}

	submitForm() {
		this.props.updateUser(this.state)
	}

  render() {
		const { navigate } = this.props.navigation;
		const { user } = this.props;

		const details = {
			'NRIC': { name: 'ic' },
			'Gender': {
				name: 'gender',
				component: FormInput.Picker,
				extra: {
					item: {
						'Male': 'male',
						'Female': 'female'
					},
					value: this.state.gender || user.gender
				}
			},
			'Birthday': { name: 'birthday' },
			'Height': { name: 'height' },
			'Weight': { name: 'weight' },
			'Blood Type': {
				name: 'blood_type',
				component: FormInput.Picker,
				extra: {
					item: {
						'A': 'A',
						'B': 'B',
						'AB': 'AB',
						'O': 'O'
					},
					value: this.state.blood_type || user.blood_type
				}
			},
			'Active Problem': { name: 'active_problem' },
			'Allergies': { name: 'allergies' },
			'Current Medicine': { name: 'current_medication' }
		}

		return (
			<View style={styles.profile}>
				<View style={styles.top}>
					<View style={styles.avatar}>
						<Avatar icon="person" size={60} />
					</View>
					<View style={styles.topDetails}>
						<Text style={styles.title}>{user.name}</Text>
						<Text style={styles.subTitle}>70 years old</Text>
						<Text>{user.ic}</Text>
					</View>
				</View>
				<View style={styles.bottom}>
					<WhitePanel style={styles.whitePanel}>
						<ScrollView>
							{Object.keys(details).map((detail, i) => {
								let obj = details[detail]
								let Component = obj.component || FormInput

								return (
									<Component
										label={detail}
										onChange={val => this.setState({ [obj.name]: val })}
										value={user[obj.name]}
										key={i}
										{...obj.extra} />
								)
							})}
						</ScrollView>
					</WhitePanel>
					<View style={styles.addIcon}>
						<RoundedButton onPress={() => this.submitForm()} title="Save" />
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

const mapDispatchToProps = dispatch => ({
	updateUser: params => {
		dispatch(updateUser(params))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(EditUserProfile)
