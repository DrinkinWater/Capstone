// import React from 'react';
import LogIn from '../screens/LogIn'
import SignUp from '../screens/SignUp'
import ForgotPassword from '../screens/ForgotPassword'
import { TabNavigator, StackNavigator } from 'react-navigation'
const App = StackNavigator({
  LogIn : {screen: LogIn},
  ForgotPassword : {screen: ForgotPassword},
  SignUp : {screen: SignUp}
},
{
  headerMode: 'screen'
})
export default App
