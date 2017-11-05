import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet,ScrollView } from 'react-native'
import { SOSButton, AddButton } from '../components/Button'
import Colors from '../constants/Colors'
import { BloodSugarList } from '../components/List'
import { WhitePanel } from '../components/Panel'
import  Icon from 'react-native-vector-icons/Ionicons' ;

export default class BloodSugarLevel extends Component {
  static navigationOptions = {
    title: 'Your Blood Sugar Level'
  }

  constructor(props){
		super(props);
		this.state = {
			results: [
				{
					result: '6.0',
					time: 'Before Lunch'
				}
			]
		};
	}
  render() {
  	const { navigate } = this.props.navigation;
  	return (
  		<ScrollView>
		  	<View style={styles.container}>
		  		<Text style={styles.title}>Averages</Text>

		  		<View style={[styles.row, styles.head]}>
			  		<Text>Bf. Breakfast</Text>
			  		<Text>Bf. Lunch</Text>
			  		<Text>Bf. Dinner</Text>
		  		</View>

		  		<Text style={styles.smallTitle}>Week</Text>

		  		<View style={styles.row}>
			  		<Icon name="ios-water" color="red" size={30} />
			  		<Text>6.9 mmol/L</Text>
			  		<Text>6.9 mmol/L</Text>
			  		<Text>6.9 mmol/L</Text>
		  		</View>

		  		<Text style={styles.smallTitle}>Past 1 month</Text>

		  		<View style={styles.row}>
			  		<Icon name="ios-water" color="red" size={30} />
			  		<Text>6.9 mmol/L</Text>
			  		<Text>6.9 mmol/L</Text>
			  		<Text>6.9 mmol/L</Text>
		  		</View>

		  		<Text style={styles.smallTitle}>Past 3 months</Text>

		  		<View style={styles.row}>
			  		<Icon name="ios-water" color="red" size={30} />
			  		<Text>6.9 mmol/L</Text>
			  		<Text>6.9 mmol/L</Text>
			  		<Text>6.9 mmol/L</Text>
		  		</View>

		  		<View style={styles.addIcon}>
		  			<AddButton
								onPress={()=>navigate("AddBloodSugarRecord")}
								 />
		  		</View>

		  		<Text style={styles.title}>Results</Text>
		  		<WhitePanel>
		  		{this.state.results.map((result, index) => (
			  		<BloodSugarList
			  			test={result}
							onPress={e => alert("pressed!")}
							key={index} />
					))}
					</WhitePanel>
		  	</View>
	  	</ScrollView>
  	)
  }
}

const styles = StyleSheet.create({
	addIcon:{
  	padding: 20,
		justifyContent: 'space-between',
		alignItems: 'center',

	},
	container: {
		padding: 20
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: 'center',
		marginBottom: 20
	},
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
  },
	smallTitle: {
		marginBottom: 10,
		fontSize: 15,
		fontWeight: "700"
	},
	head: {
		paddingLeft: 30
	}
})
