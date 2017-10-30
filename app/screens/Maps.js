import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button } from 'react-native-material-ui'
import { SearchBar } from '../components/Input'
import { ButtonTab } from '../components/Tab'
import { LocationList } from '../components/List'
import { WhitePanel, GradientPanel } from '../components/Panel'
import RNGooglePlaces from 'react-native-google-places';

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
		navigator.geolocation.getCurrentPosition(
			(position) => {
				console.log(position)
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
	}

	render() {
		return (
			<View style={styles.container}>
				<GradientPanel style={styles.linearGradient}>
					<SearchBar onClick={() => this.openSearchModal()} placeholder="What are you looking for?" />
				</GradientPanel>
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
			marginTop: 20
		}
	}
)
