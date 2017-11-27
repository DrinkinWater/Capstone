import React from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

const ButtonTab = ({ onPress, children, active }) => (
  <TouchableNativeFeedback
    onPress={onPress}>
    <View style={[styles.button, active ? styles.activeButton : null]}>
      <Text style={[styles.buttonText, active ? styles.activeButtonText : null]}>{children}</Text>
    </View>
  </TouchableNativeFeedback>
)

export default ButtonTab
