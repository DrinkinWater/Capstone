import React,{Component} from 'react'
import {View,Text,TextInput,TouchableOpacity,Button, StyleSheet} from 'react-native'
import { RoundedButton } from '../components/Button'
export default class MedicalRecords extends Component{
	static navigationOptions = {
    title: 'MedicalRecords'
  }
	render(){
    const {navigate} = this.props.navigation;
    return( 
    	<View style = {styles.container}>
    	<Text>2017</Text>
    	<View style={styles.addIcon}>
		  			<RoundedButton
							onPress={()=>navigate("AddNewRecord")}
							title="New Report" />
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

	container:
	{
		padding : 30
	}
}
)