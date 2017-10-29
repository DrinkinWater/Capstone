import { StyleSheet, Platform } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  list: {
    paddingTop: 17,
    paddingBottom: 17,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  listText: {
    fontSize: 18,
    color: Colors.mainBlack
  },
  profileInfo: {
    marginBottom: 30
  },
  profileTitle: {
    fontSize: 16,
		fontWeight: '700'
  },
  profileContent: {
    fontFamily: Platform.OS === 'android' ? 'sans-serif-light' : undefined
  },
  middleText: {
    flex: 3,
    marginLeft: 20
  },
  smallListText: {
    fontSize: 14
  },
  locationIcon: {
    flex: 1
  },
  extraSmallListText: {
    fontSize: 12,
    fontFamily: Platform.OS === 'android' ? 'sans-serif-light' : undefined
  }
})

export default styles
