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
  icon: {
    flex: 1
  },
  listText: {
    fontSize: 18,
    color: Colors.mainBlack,
    fontFamily: 'avenirRoman',
    fontWeight: '500'
  },
  profileInfo: {
    marginBottom: 30
  },
  profileTitle: {
    fontSize: 16,
		fontWeight: '700'
  },
  profileContent: {
    fontFamily: '100'
  },
  middleText: {
    flex: 3,
    marginLeft: 20
  },
  middleText1: {
    flex: 5,
    marginLeft: 30
  },
  smallListText: {
    fontSize: 14
  },
  locationIcon: {
    flex: 1
  },
  extraSmallListText: {
    fontSize: 12,
    fontFamily: '100'
  },
  cardList: {
    padding: 10,
    backgroundColor: Colors.white,
    borderRadius: 4,
    margin: 5,
    alignItems: 'stretch',
    width: 150,
    height: 200
  },
  cardImage: {
    backgroundColor: Colors.grey,
    height: 80,
    marginBottom: 15,
    borderRadius: 4
  },
  cardTitle: {
    fontSize: 16
  }
})

export default styles
