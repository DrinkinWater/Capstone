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

const Home = TabNavigator(
	{
		Maps: {
			screen: Maps,
			navigationOptions: {
				title: 'Maps',
				tabBarIcon: ({ tintColor }) => <Icon name="map" size={15} color={tintColor} />
			}
		},

		UserProfile : {
			screen: UserProfile,
			navigationOptions: {
				title: 'Profile',
				tabBarIcon: ({ tintColor }) => <Icon name="user" size={15} color={tintColor} />
			}
		},
	},
	{
		tabBarPosition: 'bottom',
		tabBarOptions: {
			showIcon: true,
			showLabel: false,
			tabStyle: { 
				padding: 10
				
			}

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
