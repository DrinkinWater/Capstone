import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  searchbar: {
    flexDirection: "row",
    alignItems: 'center',
    padding: 8,
    backgroundColor: Colors.white,
    borderRadius: 4
  },
  searchIcon: {
    padding: 10,
    fontSize: 14,
    color: Colors.grey
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: Colors.grey
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
  },
  textarea: {
    padding: 10,
    textAlignVertical: 'top'
  },
  chattextarea: {
    padding: 5,
    textAlignVertical: 'top'
  }
})

export default styles
