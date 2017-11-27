import React from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

const RecordList = ({ onPress, record }) => (
  <TouchableNativeFeedback onPress={onPress}>
    <View style={styles.list}>
      <Icon name="file" size={25} />
      <View style={styles.middleText}>
        <Text style={styles.listText}>{record.title}</Text>
        <Text style={styles.extraSmallListText}>{record.date}</Text>
      </View>
    </View>
  </TouchableNativeFeedback>
)

export default RecordList
