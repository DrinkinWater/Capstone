import React,{Component} from 'react'
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-material-ui'
import  Icon from 'react-native-vector-icons/Ionicons';

export default class BloodSugarLevel extends Component {
  render() {
  	return(
	  	<View style={styles.container}>
	  	  <Text>Graph</Text>
	  		<Text>Averages</Text>

	  		<View style={[styles.row, styles.head]}>
		  		<Text>Before Breakfast</Text>
		  		<Text>Before Lunch</Text>
		  		<Text>Before Dinner</Text>
	  		</View>

	  		<Text style={styles.title}>Week</Text>
	  		
	  		<View style={styles.row}>
		  		<Icon name="ios-water" color="red" size={30} />
		  		<Text>6.9 mmol/L</Text>
		  		<Text>6.9 mmol/L</Text>
		  		<Text>6.9 mmol/L</Text>
	  		</View>

	  		<Text style={styles.title}>Past 1 month</Text>

	  		<View style={styles.row}>
		  		<Icon name="ios-water" color="red" size={30} />
		  		<Text>6.9 mmol/L</Text>
		  		<Text>6.9 mmol/L</Text>
		  		<Text>6.9 mmol/L</Text>
	  		</View>

	  		<Text style={styles.title}>Past 3 months</Text>

	  		<View style={styles.row}>
		  		<Icon name="ios-water" color="red" size={30} />
		  		<Text>6.9 mmol/L</Text>
		  		<Text>6.9 mmol/L</Text>
		  		<Text>6.9 mmol/L</Text>
	  		</View>
	  	</View>
  	)
  }
}

const styles = StyleSheet.create({
	container: {
		padding: 20
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: 'center',
		marginBottom: 10
	},
	title: {
		marginBottom: 5,
		fontSize: 15,
		fontWeight: "700"
	},
	head: {
		paddingLeft: 30
	}
})