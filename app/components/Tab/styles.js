import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderColor: Colors.lightBlue,
    borderWidth: 1,
    borderRadius: 10,
    margin: 5
  },
  activeButton: {
    backgroundColor: Colors.lightBlue
  },
  activeButtonText: {
    color: Colors.white
  },
  buttonText: {
    color: Colors.lightBlue
  }
})

export default styles
