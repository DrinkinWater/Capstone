// import React from 'react';
import LogIn from '../screens/LogIn'
import SignUp from '../screens/SignUp'
import ForgotPassword from '../screens/ForgotPassword'
import UserProfile from '../screens/UserProfile'
import MedicalRecords from "../screens/MedicalRecords"
import { TabNavigator, StackNavigator } from 'react-navigation'
const App = StackNavigator({
  UserProfile : {screen: UserProfile},
  LogIn : {screen: LogIn},
  MedicalRecords : {screen: MedicalRecords},
  ForgotPassword : {screen: ForgotPassword},
  SignUp : {screen: SignUp}
},
  {
    headerMode: 'screen'
  } )
export default App
