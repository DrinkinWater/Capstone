import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button } from 'react-native-material-ui'
import RNGooglePlaces from 'react-native-google-places';
import { connect } from 'react-redux'
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box"

import { SearchBar } from '../components/Input'
import { ButtonTab } from '../components/Tab'
import { LocationList } from '../components/List'
import { PlainButton } from '../components/Button'
import { WhitePanel, GradientPanel } from '../components/Panel'
import { findNearbyHospital } from '../actions/map'
import Colors from '../constants/Colors'

class Maps extends Component {
	static navigationOptions = {
    header: null
  };

	constructor(props){
		super(props);
		this.state = {
			activeHospital: 1,
		};

		this.openSearchModal = this.openSearchModal.bind(this)
	}

	openSearchModal() {
    RNGooglePlaces.openAutocompleteModal({
			country: 'MY',
		})
    .then((place) => {
			this.navigateToHospital(place)
    })
    .catch(error => console.log(error.message));  // error is a Javascript Error object
  }

	navigateToHospital(hospital) {
		let address = encodeURIComponent(`${hospital.name} ${hospital.address}`)
		Linking.openURL(`https://www.google.com/maps/dir//${address}?nogmmr=1`).catch(err => console.error('An error occurred', err));
	}

	render() {
		let hospital = this.props.hospitals.find(h => h.id === this.state.activeHospital)

		return (
			<View style={styles.container}>
				<GradientPanel style={styles.linearGradient}>
					<SearchBar onClick={() => this.openSearchModal()} placeholder="What are you looking for?" />
				</GradientPanel>
				<WhitePanel style={styles.hospital}>
					<Text style={styles.title}>{hospital.name}</Text>
					<View
			      style={styles.detail}>
			      <Icon size={13} style={styles.icon} name="map-marker" />
			      <Text style={styles.input}>
			        {hospital.address}
			      </Text>
			    </View>
					<View
			      style={styles.detail}>
			      <Icon size={13} style={styles.icon} name="globe" />
			      <Text style={styles.input}>
			        {hospital.website}
			      </Text>
			    </View>
					<View
			      style={styles.detail}>
			      <Icon size={13} style={styles.icon} name="phone" />
			      <Text style={styles.input}>
			        {hospital.phone}
			      </Text>
			    </View>
					<PlainButton
						title="Go Now"
						style={styles.navigateButton}
						onPress={e => {
							this.navigateToHospital(hospital)
						}} />
				</WhitePanel>
				<View style={styles.hospitalList}>
					<ScrollView
						horizontal={true}
						showsHorizontalScrollIndicator={false}>
						{this.props.hospitals.map((result, index) => (
							<LocationList
								location={result}
								onPress={e => this.setState({ activeHospital: result.id })}
								key={index} />
						))}
					</ScrollView>
				</View>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	linearGradient: {
		padding: 25,
		paddingTop: 35,
		paddingBottom: 35,
		margin: -10,
		marginBottom: 0
	},
	container: {
		padding: 10,
		flex: 1
	},
	icon: {
		marginLeft: -5,
		margin: 5,
		flex: 1,
		textAlign: 'center'
	},
  input: {
		lineHeight: 20,
		fontSize: 13,
		flex: 9
	},
	hospital: {
		margin: 15,
		paddingLeft: 20,
		padding: 10,
	},
	hospitalList: {
		marginLeft: 10
	},
	title: {
		fontSize: 20,
		fontWeight: '700',
		color: Colors.mainBlack,
		marginBottom: 15,
		marginTop: 10
	},
	detail: {
		flexDirection: "row",
    marginBottom: 10,
	},
	navigateButton: {
		marginTop: 10
	}
})

const mapStateToProps = state => ({
	hospitals: state.map.nearbyHospital
})

export default connect(mapStateToProps)(Maps)
