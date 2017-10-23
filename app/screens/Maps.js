import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button } from 'react-native-material-ui'
import { SearchBar } from '../components/Input'
import { ButtonTab } from '../components/Tab'
import { LocationList } from '../components/List'
import { WhitePanel } from '../components/Panel'

export default class Maps extends Component {
	static navigationOptions = {
    header: null
  };

	constructor(props){
		super(props);
		this.state = {
			activeTab: "Hospital",
			results: [
				{
					name: 'Hospital A',
					distance: '1 cm',
					eta: 'ETA 1 min',
					type: 'Hospital'
				},
				{
					name: 'Hospital B',
					distance: '5 km',
					eta: 'ETA 10 mins',
					type: 'Hospital'
				},
				{
					name: 'Clinic C',
					distance: '3 km',
					eta: 'ETA 4 mins',
					type: 'Clinic'
				}
			]
		};

		this.onTabSelected = this.onTabSelected.bind(this)
	}

	onTabSelected(tab) {
		this.setState({activeTab: tab})
	}

	getActiveResults() {
		return this.state.results.filter(r => r.type === this.state.activeTab)
	}

	render() {
		return(
			<View style={styles.container}>
				<SearchBar onChangeText={t => alert(t)} placeholder="What are you looking for?" />
				<View style={styles.buttons}>
					<ButtonTab
						onPress={() => this.onTabSelected('Hospital')}
						active={this.state.activeTab === 'Hospital'}>
						Hospital
					</ButtonTab>
					<ButtonTab
						onPress={() => this.onTabSelected('Clinic')}
						active={this.state.activeTab === 'Clinic'}>
						Clinic
					</ButtonTab>
				</View>
				<View style={styles.searchResults}>
					<WhitePanel>
						{this.getActiveResults().map((result, index) => (
							<LocationList
								location={result}
								onPress={e => alert("pressed!")}
								key={index} />
						))}
					</WhitePanel>
				</View>
			</View>
			)
		}
	}
	const styles = StyleSheet.create({
		container: {
			padding: 10
		},
	  searchbar: {
			flexDirection: "row",
	  	alignItems: 'center',
	  	padding: 5
	  },
	  searchIcon: {
	  	padding: 5
	  },
	  input: {
			flex: 1
		},
		buttons: {
			flexDirection: "row",
			justifyContent: 'center',
			marginTop: 15
		},
		space: {
			margin: 5
		},
		searchResults: {
			marginTop: 20
		}
	}
)
