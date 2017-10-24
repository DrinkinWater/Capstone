import React from 'react'
import { View, Text, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

const FormInput = ({ label, value, onChangeText }) => (
  <View style={styles.form}>
    <Text style={styles.inputLabel}>{label}</Text>
    <TextInput
      style={styles.formInput}
      onChangeText={onChangeText}
      defaultValue={value}
      underlineColorAndroid='rgba(0,0,0,0)' />
  </View>
)

export default FormInput
