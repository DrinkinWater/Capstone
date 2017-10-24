import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  searchbar: {
    flexDirection: "row",
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    backgroundColor: Colors.white
  },
  searchIcon: {
    padding: 5,
    fontSize: 20
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingTop: 0,
    paddingBottom: 0
  },
  inputLabel: {
    fontSize: 16,
		fontWeight: '700'
  },
  form: {
    marginBottom: 10
  },
  formInput: {
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1
  }
})

export default styles
