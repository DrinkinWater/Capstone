import React from 'react'
import { View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

const SearchBar = ({ onChangeText, placeholder }) => (
  <View style={styles.searchbar}>
    <Icon style={styles.searchIcon} name="search" />
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      underlineColorAndroid='rgba(0,0,0,0)' />
  </View>
)

export default SearchBar