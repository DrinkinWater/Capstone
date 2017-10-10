import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback, Platform, ScrollView } from 'react-native'
import { Avatar } from 'react-native-material-ui';
import { RoundedButton } from '../components/Button'
import { MenuList } from '../components/List'
import { WhitePanel } from '../components/Panel'
import Colors from '../constants/Colors'

export default class UserProfile extends Component{
	static navigationOptions = {
    header: null
  };
	render(){
    const {navigate} = this.props.navigation;
    return(
    	<View style={styles.profile}>
				<ScrollView>
					<View style={styles.topDetails}>
						<Avatar icon="person" size={80} iconSize={60} />

						<Text style={styles.title}>Joseph Lim</Text>
						<Text style={styles.subTitle}>45 years old</Text>

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
							<MenuList onPress={() => navigate("LogIn")}>
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
