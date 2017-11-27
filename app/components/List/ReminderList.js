import React from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

const ReminderList = ({ onPress, reminder }) => (
  <TouchableNativeFeedback onPress={onPress}>
    <View style={styles.list}>
      <Icon name="bell-o" size={25} />
      <View style={styles.middleText}>
        <Text style={styles.listText}>{reminder.name}</Text>
        <Text style={styles.smallListText}>{reminder.date} </Text>
        <Text style={styles.smallListText}>{reminder.time} </Text>
        <Text style={styles.smallListText}>{reminder.location}</Text>
      </View>
    </View>
  </TouchableNativeFeedback>
)

export default ReminderList