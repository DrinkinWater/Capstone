import React from 'react'
import { View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

const SearchBar = ({ onClick, placeholder }) => (
  <View style={styles.searchbar}>
    <Icon style={styles.searchIcon} name="search" />
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onFocus={onClick}
      underlineColorAndroid='rgba(0,0,0,0)' />
  </View>
)

export default SearchBar
