import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

export default StyleSheet.create({
  roundedButton: {
		alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    width: 240,
    height: 42,
		backgroundColor: Colors.lightRed,
	},
    roundedButton1: {
        alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    width: 240,
    height: 42,
        backgroundColor: Colors.lightBlue,
    },

  SOSButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 150,
    width: 240,
    height: 240,

    backgroundColor: Colors.turqoise


  },

	roundedButtonText: {
		fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 20,
    backgroundColor: 'transparent',
    color: Colors.white,
	},

    SOSButtonText: {
        fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 30,
    backgroundColor: 'transparent',
    color: Colors.white,
    },

})
