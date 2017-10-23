import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback, Platform, ScrollView } from 'react-native'
import { Avatar } from 'react-native-material-ui';
import { connect } from 'react-redux'
import { signOutUser } from '../actions/auth'
import { RoundedButton } from '../components/Button'
import { MenuList } from '../components/List'
import { WhitePanel } from '../components/Panel'
import Colors from '../constants/Colors'

class UserProfile extends Component{
	static navigationOptions = {
    header: null
  };
	render(){
    const { navigate } = this.props.navigation;
		const { user } = this.props;

    return (
    	<View style={styles.profile}>
				<ScrollView>
					<View style={styles.topDetails}>
						<Avatar icon="person" size={80} iconSize={60} />

						<Text style={styles.title}>{user.name}</Text>
						<Text style={styles.subTitle}>{user.email}</Text>

						<RoundedButton
							onPress={()=>navigate("UserDetails")}
							title="View More" />
					</View>

					<View style={styles.bottomDetails}>
						<WhitePanel>
							<MenuList onPress={() => navigate("MedicalRecords")}>
								Medical Records
							</MenuList>
							<MenuList onPress={() => navigate("BloodSugarLevel")}>
								Blood Sugar Report
							</MenuList>
							<MenuList onPress={() => this.props.signOut()}>
								Sign Out
							</MenuList>
						</WhitePanel>
					</View>
				</ScrollView>
    	</View>
    	)
    }
}

const styles = StyleSheet.create({
	profile: {
		justifyContent: 'space-between',
		alignItems: 'stretch',
		padding: 20
	},
	topDetails: {
		padding: 20,
		justifyContent: 'space-between',
		alignItems: 'center',
		flex: 2
	},
	bottomDetails: {
		flex: 3,
	},
	title: {
		fontSize: 30,
		fontWeight: '700',
		color: 'black',
		textAlign: 'center',
		margin: 5
	},
	subTitle: {
		marginBottom: 20,
		fontSize: 18,
		fontFamily: Platform.OS === 'android' ? 'sans-serif-light' : undefined
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
