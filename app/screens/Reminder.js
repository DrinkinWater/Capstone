import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { ButtonTab } from '../components/Tab'
import { ReminderList } from '../components/List'
import { WhitePanel } from '../components/Panel'
import { AddButton } from '../components/Button'

class Reminder extends Component {
  static navigationOptions = {
    title: 'Reminder'
  }

  constructor(props){
		super(props);

		this.state = {
			activeTab: "Today"
		};

		this.onTabSelected = this.onTabSelected.bind(this)
	}

	onTabSelected(tab) {
		this.setState({ activeTab: tab })
	}

	getActiveResults() {
    // let d = (new Date()).toDateString()
    //
    // if (this.state.activeTab === "Today") {
  	// 	return this.props.reminders.filter(r => (
    //     (new Date(r.date)).toDateString() === d
    //   ))
    // } else {
    //   return this.props.reminders.filter(r => (
    //     (new Date(r.date)).toDateString() !== d
    //   ))
    // }
    return this.props.reminders
	}

	render() {
		const { navigate } = this.props.navigation;

		return (
			<View style={styles.container}>
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
		  			<AddButton
							onPress={()=>navigate("AddReminder")}
							 />
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
})

const mapStateToProps = state => ({
	reminders: state.reminders
})

export default connect(mapStateToProps)(Reminder)
