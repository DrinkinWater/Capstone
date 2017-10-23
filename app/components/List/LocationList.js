import React from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

const LocationList = ({ onPress, location }) => (
  <TouchableNativeFeedback onPress={onPress}>
    <View style={styles.list}>
      <Icon name="hospital-o" size={25} />
      <View style={styles.middleText}>
        <Text style={styles.listText}>{location.name}</Text>
        <Text style={styles.extraSmallListText}>{location.distance} away</Text>
        <Text style={styles.smallListText}>{location.eta} away</Text>
      </View>
      <Icon name="long-arrow-right" size={25} />
    </View>
  </TouchableNativeFeedback>
)

export default LocationList

