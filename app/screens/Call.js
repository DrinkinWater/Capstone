import React,{Component} from 'react'
import {View,Text,TextInput,TouchableOpacity,Button,StyleSheet} from 'react-native'
import { WhitePanel, GradientPanel } from '../components/Panel'
import Avatar from '../components/Avatar'
import Colors from '../constants/Colors'
import { PlainButton } from '../components/Button'
import LinearGradient from 'react-native-linear-gradient';

export default class Call extends Component{
	static navigationOptions = {
    header : null
  }
	render(){
		return(
			
				<LinearGradient
			    colors={[Colors.midBlue, Colors.lightBlue]}
			    start={{x: 0.0, y: 0.25}}
			    end={{x: 0.5, y: 1.0}}
			    style={styles.gradient}>
				 <WhitePanel style={styles.panel} >
				 	<View  style={styles.avatarsize}>
				 		<Avatar.Doctor/>
				 	</View>
				 	<View style={styles.profile}>
				 		<Text style={styles.title}>Dr. Jeff</Text>
				 		<Text style={styles.subTitle}>Respiratory Physician</Text>
				 		<PlainButton
								onPress={() => navigate("UserDetails")}
								title="Contact" 
								style={styles.plain}/>
				 </View>
				 </WhitePanel>
				 <WhitePanel style={styles.panel} >
				 	<View  style={styles.avatarsize}>
				 		<Avatar.Doctor1/>
				 	</View>
				 	<View style={styles.profile}>
				 		<Text style={styles.title}>Dr. Benjamin</Text>
				 		<Text style={styles.subTitle}>Breast Surgeon</Text>
				 		<PlainButton
								onPress={() => navigate("UserDetails")}
								title="Contact" 
								style={styles.plain}/>
				 </View>
				 </WhitePanel>
				 </LinearGradient>
			)
	}

}

const styles = StyleSheet.create({
	plain: {
		color: Colors.veryRed
	},

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