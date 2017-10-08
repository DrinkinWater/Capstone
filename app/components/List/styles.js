import { StyleSheet, Platform } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  list: {
    paddingTop: 17,
    paddingBottom: 17,
    paddingLeft: 10,
    borderTopColor: Colors.lightGray,
    borderTopWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  listText: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'sans-serif-light' : undefined
  }
})

export default styles
