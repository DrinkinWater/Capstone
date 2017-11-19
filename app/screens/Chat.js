import React,{Component} from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import Avatar from '../components/Avatar'
import Colors from '../constants/Colors'
import { Textarea, ChatInput } from '../components/Input'
import {Message} from '../components/Chat'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Chat extends Component{
	static navigationOptions = ({ navigation }) => ({
		title: `${navigation.state.params.title}`,
	  headerRight: <Icon style={{padding:20}} size={20} name="video-camera"/>
	})

	render(){
		return(
			<View style={styles.space}>
				<View>
					<View style={styles.patient}>
						<Message sender="patient" title="Hi i am Joseph and I had skin allergies for the past two weeks on my arm"/>
					</View>
					<View style={styles.doctor}>
						<Message title="Hi, nice to meet you. Do you mind to make a video call?"/>
					</View>
				</View>
				<View style={styles.attachment}>
					<View style={styles.textbox}>
							<ChatInput
								onChangeText={message => this.setState({ message })}
								placeholder="Type a message." />
					</View>
					<View style={styles.attachment}>
						<TouchableOpacity>
          		<Icon style={styles.iconSpace} name="paperclip" size={20}/>
          	</TouchableOpacity>
          	<TouchableOpacity>
          		<Icon style={styles.iconSpace} name="camera" size={20}/>
          	</TouchableOpacity>
					</View>
				</View>
   		</View>
			)
	}

}

const styles = StyleSheet.create({
	iconSpace: {
		padding:12
	},
	attachment: {
		flexDirection: 'row',
		alignItems: 'center'

	},
	plain: {
		color: Colors.veryRed
	},
	linearGradient: {
		margin: -15,
		marginBottom: 0,
		paddingTop: 150,
	},
	space: {
		justifyContent: 'space-between',
		flex: 1,
		alignItems: 'stretch'
	},
	gradient: {
		flex:1
	},
	textbox: {
		padding: 5,
		flex: 1
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
