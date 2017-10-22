import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button } from 'react-native-material-ui'
import { ButtonTab } from '../components/Tab'
import { ReminderList } from '../components/List'
import { WhitePanel } from '../components/Panel'
import { RoundedButton } from '../components/Button'

export default class Reminder extends Component {
	static navigationOptions = {
    header: null
  };

  constructor(props){
		super(props);
		this.state = {
			activeTab: "Today",
			results: [
				{
					name: 'Blood Test',
					time: '16:00',
					date: '10/1/18',
					location: 'INTI College',
					type: 'Today'
				},
				{
					name: 'Body Check',
					time: '15:00',
					date: '11/1/18',
					location: '-',
					type: 'Upcoming'
				},
				{
					name: 'Take Report',
					time: '11:40',
					date: '11/1/18',
					location: 'hospital Subang',
					type: 'Upcoming'
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
		const {navigate} = this.props.navigation;
		return(
			<View style={styles.container}>
				<View style={styles.buttons}>
					<ButtonTab
						onPress={() => this.onTabSelected('Today')}
						active={this.state.activeTab === 'Today'}>
						Today
					</ButtonTab>
					<ButtonTab
						onPress={() => this.onTabSelected('Upcoming')}
						active={this.state.activeTab === 'Upcoming'}>
						Upcoming
					</ButtonTab>
				</View>
				<View style={styles.searchResults}>
					<WhitePanel>
						{this.getActiveResults().map((result, index) => (
							<ReminderList
								reminder={result}
								onPress={e => alert("pressed!")}
								key={index} />
						))}
					</WhitePanel>

					<View style={styles.addIcon}>
		  			<RoundedButton
							onPress={()=>navigate("AddReminder")}
							title="New Reminder" />
		  		</View>
  
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