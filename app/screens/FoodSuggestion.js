import React, { Component } from 'react'
import { ScrollView, Image, StyleSheet, Dimensions } from 'react-native'

export default class FoodSuggestion extends Component{
	static navigationOptions = {
    header : null
  }

	render() {

		return (
			<ScrollView>
				<Image
					source={require('../../assets/images/food_suggestion.png')}
					style={styles.image}
					resizeMode="contain" />
			</ScrollView>
		)
	}
}

// To make image full width
const width = Dimensions.get('window').width;
const widthChange = width/540
const height = 1616 * widthChange

const styles = StyleSheet.create({
	image: {
		width: width,
		height: height,
		marginTop: 0,
		top: 0
	}
})
