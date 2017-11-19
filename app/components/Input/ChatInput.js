import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { WhitePanel } from '../Panel'
import styles from './styles'

const ChatInput = ({ placeholder, onChangeText }) => (
  <WhitePanel>
    <TextInput
      multiline={true}
      numberOfLines={1}
      onChangeText={onChangeText}
      placeholder={placeholder}
      underlineColorAndroid='transparent'
      style={styles.chattextarea} />
  </WhitePanel>
)

export default ChatInput