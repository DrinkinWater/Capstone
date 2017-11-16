import React from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles'

const BloodSugarList = ({ onPress, test  }) => (
  <TouchableNativeFeedback onPress={onPress}>
    <View style={styles.list}>
      <Icon name="ios-water-outline" size={25} style={styles.icon} />
      <View style={styles.middleText1}>
        <Text style={styles.listText}>{test.result} mmol/L</Text>
        <Text style={styles.extraSmallListText}>{test.time} </Text>
        <Text style={styles.extraSmallListText}>{test.date} </Text>
      </View>
    </View>
  </TouchableNativeFeedback>
)


export default BloodSugarList
