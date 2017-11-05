import React from 'react'
import { View, Text, TextInput, Picker } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

const FormInput = ({ label, value, onChange }) => (
  <View style={styles.form}>
    <Text style={styles.inputLabel}>{label}</Text>
    <TextInput
      style={styles.formInput}
      onChangeText={onChange}
      defaultValue={value}
      underlineColorAndroid='rgba(0,0,0,0)' />
  </View>
)

FormInput.Picker = ({ label, value, onChange, item }) => (
  <View style={styles.form}>
    <Text style={styles.inputLabel}>{label}</Text>
    <Picker
      selectedValue={value}
      onValueChange={onChange} >
      {Object.keys(item).map((label, i) => (
        <Picker.Item label={label} value={item[label]} key={i} />
      ))}
    </Picker>
  </View>
)

export default FormInput
