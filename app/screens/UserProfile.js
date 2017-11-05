import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback, Platform, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { signOutUser } from '../actions/auth'
import { PlainButton } from '../components/Button'
import { MenuList } from '../components/List'
import { WhitePanel, GradientPanel } from '../components/Panel'
import Avatar from '../components/Avatar'
import Colors from '../constants/Colors'

class UserProfile extends Component{
	static navigationOptions = {
    header: null
  };
	render() {
    const { navigate } = this.props.navigation;
		const { user } = this.props;

    return (
    	<View style={styles.profile}>
				<View style={styles.topDetails}>
					<GradientPanel style={styles.linearGradient} />
					<WhitePanel style={styles.panel}>
						<Avatar />

						<Text style={styles.title}>{user.name}</Text>
						<Text style={styles.subTitle}>{user.email}</Text>

						<PlainButton
							onPress={() => navigate("UserDetails")}
							title="View Profile" />

					</WhitePanel>
				</View>
				<View style={styles.bottomDetails}>
					<MenuList onPress={() => navigate("MedicalRecords")}>
						Medical Records
					</MenuList>
					<MenuList onPress={() => navigate("BloodSugarLevel")}>
						Blood Sugar Report
					</MenuList>
					<MenuList onPress={() => this.props.signOut()}>
						Sign Out
					</MenuList>
				</View>
    	</View>
    	)
    }
}

const styles = StyleSheet.create({
	linearGradient: {
		margin: -15,
		marginBottom: 0,
		paddingTop: 150,
	},
	profile: {
		alignItems: 'stretch',
		padding: 15,
		flex: 1
	},
	topDetails: {
		// alignItems: 'stretch',
		// flex: 1,
	},
	panel: {
		paddingLeft: 30,
		paddingTop: 15,
		padding: 20,
		marginTop: -135
	},
	bottomDetails: {
		padding: 15
	},
	title: {
		fontSize: 26,
		fontWeight: '700',
		color: Colors.mainBlack,
		marginTop: 15
	},
	subTitle: {
		marginBottom: 20,
		fontSize: 16,
		fontWeight: '100',
		color: Colors.grey
	},
})

const mapStateToProps = state => ({
	user: state.auth.currentUser
})

const mapDispatchToProps = dispatch => ({
	signOut: () => {
		dispatch(signOutUser())
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
