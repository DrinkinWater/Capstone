import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { WhitePanel } from '../Panel'
import styles from './styles'

const Textarea = ({ placeholder, onChangeText }) => (
  <WhitePanel>
    <TextInput
      multiline={true}
      numberOfLines={8}
      onChangeText={onChangeText}
      placeholder={placeholder}
      underlineColorAndroid='transparent'
      style={styles.textarea} />
  </WhitePanel>
)

export default Textarea
