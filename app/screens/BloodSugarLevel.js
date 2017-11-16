import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet,ScrollView } from 'react-native'
import { SOSButton, AddButton } from '../components/Button'
import Colors from '../constants/Colors'
import { BloodSugarList } from '../components/List'
import { WhitePanel } from '../components/Panel'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'

class BloodSugarLevel extends Component {
  static navigationOptions = {
    title: 'Your Blood Sugar Level'
  }

  calculateRecordsAverage(records) {
    // debugger
    return records.reduce((total, record) => total += parseFloat(record.result), 0)
  }

  groupRecords(records) {
    return [
      this.calculateRecordsAverage(records.filter(r => r.time === "Before Breakfast")),
      this.calculateRecordsAverage(records.filter(r => r.time === "Before Lunch")),
      this.calculateRecordsAverage(records.filter(r => r.time === "Before Dinner")),
    ]
  }

  weekAverage() {
    let d = new Date()
    let start = new Date(d.getFullYear(), d.getMonth(), d.getDate() - 7);

    let records = this.props.records.filter(record => {
      let date = new Date(record.date)
       return date > start && date <= d
    })

    return this.groupRecords(records)
  }

  monthAverage() {
    let d = new Date()

    let end = new Date(d.getFullYear(), d.getMonth(), d.getDate() - 7);
    let start = new Date(d.getFullYear(), d.getMonth() - 1, d.getDate());

    let records = this.props.records.filter(record => {
      let date = new Date(record.date)
       return date > start && date <= d
    })

    return this.groupRecords(records)
  }

  threeMonthAverage() {
    let d = new Date()

    let end = new Date(d.getFullYear(), d.getMonth(), d.getDate() - 7);
    let start = new Date(d.getFullYear(), d.getMonth() - 1, d.getDate());

    let records = this.props.records.filter(record => {
      let date = new Date(record.date)
       return date > start && date <= d
    })

    return this.groupRecords(records)
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
            {this.weekAverage().map((num, i) => (
              <Text key={i}>{num} mmol/L</Text>
            ))}
		  		</View>

		  		<Text style={styles.smallTitle}>Past 1 month</Text>

		  		<View style={styles.row}>
			  		<Icon name="ios-water" color="red" size={30} />
            {this.monthAverage().map((num, i) => (
              <Text key={i}>{num} mmol/L</Text>
            ))}
		  		</View>

		  		<Text style={styles.smallTitle}>Past 3 months</Text>

		  		<View style={styles.row}>
			  		<Icon name="ios-water" color="red" size={30} />
            {this.threeMonthAverage().map((num, i) => (
              <Text key={i}>{num} mmol/L</Text>
            ))}
		  		</View>

		  		<View style={styles.addIcon}>
		  			<AddButton
								onPress={()=>navigate("AddBloodSugarRecord")}
								 />
		  		</View>

		  		<Text style={styles.title}>Results</Text>
		  		<WhitePanel>
		  		{this.props.records.map((record, index) => (
			  		<BloodSugarList
			  			test={record}
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

const mapStateToProps = state => ({
  records: state.bloodSugarRecords
})

export default connect(mapStateToProps)(BloodSugarLevel)
