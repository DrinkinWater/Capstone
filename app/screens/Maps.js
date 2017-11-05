import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, BackHandler } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button } from 'react-native-material-ui'
import RNGooglePlaces from 'react-native-google-places';
import { connect } from 'react-redux'
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box"

import { SearchBar } from '../components/Input'
import { ButtonTab } from '../components/Tab'
import { LocationList } from '../components/List'
import { WhitePanel, GradientPanel } from '../components/Panel'
import { findNearbyHospital } from '../actions/map'

class Maps extends Component {
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
		this.openSearchModal = this.openSearchModal.bind(this)
	}

	onTabSelected(tab) {
		this.setState({activeTab: tab})
	}

	getActiveResults() {
		return this.state.results.filter(r => r.type === this.state.activeTab)
	}

	openSearchModal() {
    RNGooglePlaces.openAutocompleteModal({
			country: 'MY',
		})
    .then((place) => {
			console.log(place);
			// place represents user's selection from the
			// suggestions and it is a simplified Google Place object.
    })
    .catch(error => console.log(error.message));  // error is a Javascript Error object
  }

	componentDidMount() {
		LocationServicesDialogBox.checkLocationServicesIsEnabled({
      message: "<h2>Use Location ?</h2>This app wants to change your device settings:<br/><br/>Use GPS, Wi-Fi, and cell network for location<br/><br/><a href='#'>Learn more</a>",
      ok: "YES",
      cancel: "NO",
      enableHighAccuracy: true, // true => GPS AND NETWORK PROVIDER, false => ONLY GPS PROVIDER
      showDialog: true, // false => Opens the Location access page directly
      openLocationServices: true // false => Directly catch method is called if location services are turned off
	  }).then(function(success) {
      // success => {alreadyEnabled: true, enabled: true, status: "enabled"}
			navigator.geolocation.getCurrentPosition(
				(position) => {
					console.log(position)
	        this.props.fetchHospital({
	          latitude: position.coords.latitude,
	          longitude: position.coords.longitude,
	        })
	      },
	      (error) => alert(error.message),
	      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
	    );
    }.bind(this)).catch((error) => {
	      alert(error.message);
	  });

	  BackHandler.addEventListener('hardwareBackPress', () => {
    	LocationServicesDialogBox.forceCloseDialog();
	  });

	}

	renderHospital() {
		if (this.props.hospitals.length) {
			return (
				<ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}>
					{this.props.hospitals.map((result, index) => (
						<LocationList
							location={result}
							onPress={e => alert("pressed!")}
							key={index} />
					))}
				</ScrollView>
			)
		} else {
			return (
				<ActivityIndicator animating={true} size={30} />
			)
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<GradientPanel style={styles.linearGradient}>
					<SearchBar onClick={() => this.openSearchModal()} placeholder="What are you looking for?" />
				</GradientPanel>
				<View style={styles.searchResults}>
					{this.renderHospital()}
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
	},
	container: {
		padding: 10,
		flex: 1
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
		marginTop: 20,
		marginLeft: 10
	}
})

const mapStateToProps = state => ({
	hospitals: state.map.nearbyHospital
})

const mapDispatchToProps = disptach => ({
	fetchHospital: params => {
		disptach(findNearbyHospital(params))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Maps)
