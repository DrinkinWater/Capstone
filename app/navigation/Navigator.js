import React from 'react';
import LogIn from '../screens/LogIn'
import SignUp from '../screens/SignUp'
import ForgotPassword from '../screens/ForgotPassword'
import UserProfile from '../screens/UserProfile'
import MedicalRecords from "../screens/MedicalRecords"
import UserDetails from "../screens/UserDetails"
import BloodSugarLevel from "../screens/BloodSugarLevel"
import Maps from "../screens/Maps"
import { TabNavigator, StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import Colors from '../constants/Colors'

const Home = TabNavigator(
	{
		Maps: {
			screen: Maps,
			navigationOptions: {
				title: 'Maps',
				tabBarIcon: ({ tintColor }) => <Icon name="map" size={26} color={tintColor} />
			}
		},
		// Maps: {
		// 	screen: SOS,
		// 	navigationOptions: {
		// 		title: 'SOS',
		// 		tabBarIcon: ({ tintColor }) => <Icon name="ambulance" size={15} color={tintColor} />
		// 	}
		// },
		UserProfile : {
			screen: UserProfile,
			navigationOptions: {
				title: 'Profile',
				tabBarIcon: ({ tintColor }) => <Icon name="user" size={26} color={tintColor} />
			}
		},
	},
	{
		tabBarPosition: 'bottom',
		// initialRouteName: 'UserProfile',
		tabBarOptions: {
			showIcon: true,
			showLabel: false,
			activeTintColor: Colors.lightBlue,
			inactiveTintColor: Colors.grey,
			tabStyle: {
				padding: 12
			},
			style: {
				backgroundColor: Colors.notSoWhite,
				// boxShadow: '0 5px 25px rgba(54,67,77,0.15)',
				// shadowColor: 'rgb(54, 67, 77)',
				// shadowOpacity: 0.15,
			},
			renderIndicator: () => null
		}
	},

)

const App = StackNavigator(
	{
	  Home : {screen: Home},
	  LogIn : {screen: LogIn},
	  MedicalRecords : {screen: MedicalRecords},
	  ForgotPassword : {screen: ForgotPassword},
	  SignUp : {screen: SignUp},
	  UserDetails : {screen: UserDetails},
	  BloodSugarLevel : {screen: BloodSugarLevel}
	},
  {
    headerMode: 'screen'
  }
)
export default App
