import {StyleSheet} from 'react-native'
import Colors from '../../constants/Colors'

export default StyleSheet.create({
  roundedButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    width: 240,
    height: 42,
    backgroundColor: Colors.pink
  },
  roundedButton1: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    width: 240,
    height: 42,
    backgroundColor: Colors.lightBlue
  },

  SOSButton: {
    borderRadius: 150,
    width: 240,
    height: 240,
  },

  roundedButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 20,
    backgroundColor: 'transparent',
    color: Colors.white
  },
  SOSButtonText: {
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 30,
    backgroundColor: 'transparent',
    color: Colors.white
  },
  plainButton: {
    padding: 10
  },
  plainButtonText: {
    fontWeight: 'bold',
    color: Colors.pink,
    fontSize: 16
  },
  AddButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    width: 42,
    height: 42,
    backgroundColor: Colors.lightGreen
  }
})
