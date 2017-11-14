import React from 'react'
import { View, Text, TouchableNativeFeedback, Image } from 'react-native'
import styles from './styles'

const LocationList = ({ onPress, location }) => (
  <TouchableNativeFeedback
    onPress={onPress}
    delayPressIn={0}>
    <View style={styles.cardList}>
      <Image
        style={styles.cardImage}
        source={{uri: location.image}}
        resizeMode="cover" />
      <View style={styles.cardText}>
        <Text style={styles.cardTitle}>{location.name}</Text>
        <Text style={styles.smallListText}>{location.distance}</Text>
      </View>
    </View>
  </TouchableNativeFeedback>
)

export default LocationList
