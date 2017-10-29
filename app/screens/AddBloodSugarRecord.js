import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, TouchableNativeFeedback, ScrollView } from 'react-native'
import { RoundedButton } from '../components/Button'
import { MenuList } from '../components/List'
import { WhitePanel } from '../components/Panel'
import { Dropdown } from 'react-native-material-dropdown';

import Colors from '../constants/Colors'

export default class AddBloodSugarRecord extends Component {
	static navigationOptions = {
  	title: 'New Record'

  }

	render() {

	  let time= [
			{
	      value: 'Before Breakfast',
	    },
			{
	      value: 'Before Lunch',
	    },
			{
      value: 'Before Dinner',
	    }
		];

		return (

	    <View style={styles.container}>
	    	<Text Text style={styles.smallTitle}>Sugar Concentration </Text>
	   	  	<View style={styles.input}>
		   			<TextInput style={{height: 40}, {width: 280}} placeholder="Your result" onChangeText={(text) => this.setState({text})}/>
	      		<View style={styles.space}>
	       	 		<Text>mmol/L</Text>
	       		</View>
	     	 	</View>

     		<Text style={styles.smallTitle}>Measured in</Text>

        <Dropdown label='Time' data={time}/>

     		<Text style={styles.smallTitle}>Date & Time </Text>

        <View style={styles.input}>
        	<Text>13 Oct 2017</Text>
        	<Text>3:29pm</Text>
         </View>

        <Text Text style={styles.smallTitle}>Notes </Text>
        <TextInput/>
      </View>
		)
	}
}

const styles = StyleSheet.create({

	container: {
		padding: 20
	},
	input: {
    flexDirection : 'row',
    justifyContent:'space-around',
    padding:20
	},
	space: {
		padding:20
	},
	smallTitle: {
		padding:5,
		fontSize: 15,
	}
	})
