// import React from 'react';
import Splash from '../screens/Splash'
import LogIn from '../screens/LogIn'
import SignUp from '../screens/SignUp'
import ForgotPassword from '../screens/ForgotPassword'
import UserProfile from '../screens/UserProfile'
import MedicalRecords from "../screens/MedicalRecords"
import { TabNavigator, StackNavigator } from 'react-navigation'

const Navigator = StackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        header: () => null,
      }
    },
    LogIn : {screen: LogIn},
    UserProfile : {screen: UserProfile},
    MedicalRecords : {screen: MedicalRecords},
    ForgotPassword : {screen: ForgotPassword},
    SignUp : {screen: SignUp}
  },
  {
    headerMode: 'screen'
  }
)
export default Navigator
