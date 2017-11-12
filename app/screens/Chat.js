import React,{Component} from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { WhitePanel, GradientPanel } from '../components/Panel'
import Avatar from '../components/Avatar'
import Colors from '../constants/Colors'
import { PlainButton } from '../components/Button'
import LinearGradient from 'react-native-linear-gradient';
import {Message} from '../components/Chat'

export default class Chat extends Component{
	static navigationOptions = {
		title: 'Dr. Jeff'
	}
	
	render(){
		return(
		<View>
			<View style={styles.patient}>
				<Message sender="patient" title="Hi i am Joseph and I had skin allergies for the past two weeks on my arm"/>
			</View>
			<View style={styles.doctor}>
				<Message title="Hi, nice to meet you. Do you mind to make a video call?"/>
			</View>
		</View>
			)
	}

}

const styles = StyleSheet.create({
	plain: {
		color: Colors.veryRed
	},
	// patient: {
	// 	alignSelf: "flex-end"
	// },
	// doctor: {
	// 	alignSelf: "flex-start"
	// },
	linearGradient: {
		margin: -15,
		marginBottom: 0,
		paddingTop: 150,
	},
	gradient: {
		flex:1
	},
	avatarsize: {
		flex: 1,
		padding: 5
	},
	profile: {
		flex: 2
	},
	topDetails: {
		// alignItems: 'stretch',
		// flex: 1,
	},
	panel: {
		marginLeft: 15,
		marginTop: 10,
		marginRight:15,
		padding: 10,
		borderRadius: 5,
		flexDirection: 'row'
	},
	bottomDetails: {
		padding: 15
	},
	title: {
		fontSize: 20,
		fontWeight: '700',
		color: Colors.mainBlack,
		marginTop: 15
	},
	subTitle: {
		marginBottom: 16,
		fontSize: 16,
		fontWeight: '100',
		color: Colors.grey
	},
})