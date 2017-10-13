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

  SOSButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 150,
    width: 240,
    height: 240,
    backgroundColor: Colors.chartreuse,
  },

	roundedButtonText: {
		fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 14,
    backgroundColor: 'transparent',
    color: Colors.white,
	}
})
