import Splash from '../screens/Splash'
import React from 'react';
import LogIn from '../screens/LogIn'
import SignUp from '../screens/SignUp'
import Chat from '../screens/Chat'
import ForgotPassword from '../screens/ForgotPassword'
import UserProfile from '../screens/UserProfile'
import MedicalRecord from "../screens/MedicalRecord"
import MedicalRecords from "../screens/MedicalRecords"
import UserDetails from "../screens/UserDetails"
import BloodSugarLevel from "../screens/BloodSugarLevel"
import SOS from "../screens/SOS"
import AddBloodSugarRecord from "../screens/AddBloodSugarRecord"
import EditUserProfile from "../screens/EditUserProfile"
import Reminder from "../screens/Reminder"
import Maps from "../screens/Maps"
import FoodSuggestion from "../screens/FoodSuggestion"
import AddNewRecord from "../screens/AddNewRecord"
import { TabNavigator, StackNavigator } from 'react-navigation'
import AddReminder from "../screens/AddReminder"
import Icon from 'react-native-vector-icons/FontAwesome'
import Colors from '../constants/Colors'
import Call from '../screens/Call'
import FoodDetails from '../screens/FoodDetails'
const Home = TabNavigator(
	{
		Call: {
    	screen: Call,
    	navigationOptions: {
    		title: 'Call',
    		tabBarIcon: ({ tintColor }) => <Icon name="phone" size={20} color={tintColor} />
    	}
		},

		Maps: {
			screen: Maps,
			navigationOptions: {
				title: 'Maps',
				tabBarIcon: ({ tintColor }) => <Icon name="map" size={20} color={tintColor} />
			}
		},

		SOS: {
			screen: SOS,
			navigationOptions: {
				title: 'SOS',
				tabBarIcon: ({ tintColor}) => <Icon name="ambulance" size={20} color={tintColor}/>
			}
		},

		FoodSuggestion : {
			screen: FoodSuggestion,
			navigationOptions: {
				title: 'FoodSuggestion',
				tabBarIcon: ({ tintColor }) => <Icon name="cutlery" size={20} color={tintColor} />
			}
		},

		UserProfile : {
			screen: UserProfile,
			navigationOptions: {
				title: 'Profile',
				tabBarIcon: ({ tintColor }) => <Icon name="user" size={20} color={tintColor} />
			}
		},


	},
	{
		tabBarPosition: 'bottom',
		initialRouteName: 'SOS',
		tabBarOptions: {
			showIcon: true,
			showLabel: false,
			activeTintColor: Colors.darkGrey,
			inactiveTintColor: Colors.grey,
			tabStyle: {
				padding: 14
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
    Splash: {
      screen: Splash,
      navigationOptions: {
        header: () => null,
      }
    },
	  Home : {screen: Home},
	  LogIn : {screen: LogIn},
		MedicalRecord : {screen: MedicalRecord},
	  MedicalRecords : {screen: MedicalRecords},
	  ForgotPassword : {screen: ForgotPassword},
	  SignUp : {screen: SignUp},
	  AddBloodSugarRecord : {screen: AddBloodSugarRecord},
	  UserDetails : {screen: UserDetails},
	  BloodSugarLevel : {screen: BloodSugarLevel},
	  EditUserProfile : {screen: EditUserProfile},
	  AddReminder : {screen: AddReminder},
	  AddNewRecord : {screen: AddNewRecord},
	  Chat : {screen: Chat},
	  Reminder : {screen: Reminder},
	  FoodDetails : {screen: FoodDetails}
	},
  {
    headerMode: 'screen',
		cardStyle: {
	    backgroundColor: Colors.whiteSmoke
	  }
  }
)

export default App
