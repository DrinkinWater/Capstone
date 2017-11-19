import {StyleSheet} from 'react-native'
import Colors from '../../constants/Colors'

export default StyleSheet.create({
  patientMsg: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: Colors.lightBlue,
    maxWidth: 250,
    padding: 10,
    margin: 10,
    alignSelf: 'flex-end'

  },
  doctorMsg: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: Colors.lightGray,
    maxWidth: 250,
    padding: 10,
    margin: 10,
    
  },

  messageText: {
    fontSize: 15,
    // lineHeight: 20,
    backgroundColor: 'transparent',
    color: Colors.white,
    padding:0,
    marginLeft: 5

  },

   doctorMessageText: {
    fontSize: 15,
    // lineHeight: 20,
    backgroundColor: 'transparent',
    color: Colors.mainBlack,
    padding:0,
    marginLeft: 5

  }
})
