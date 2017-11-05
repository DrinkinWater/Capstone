import React from 'react'
import { View, Text, TouchableNativeFeedback, Image } from 'react-native'
import styles from './styles'

const LocationList = ({ onPress, location }) => (
  <TouchableNativeFeedback
    onPress={onPress}
    delayPressIn={0}>
    <View style={styles.cardList}>
      <Image style={styles.cardImage}></Image>
      <Text style={styles.cardTitle}>{location.name}</Text>
      <Text style={styles.extraSmallListText}>{location.vicinity}</Text>
      <Text style={styles.smallListText}>{location.eta}</Text>
    </View>
  </TouchableNativeFeedback>
)

export default LocationList
