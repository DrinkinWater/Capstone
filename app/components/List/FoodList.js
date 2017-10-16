import React from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

const FoodList = ({ onPress, food }) => (
  <TouchableNativeFeedback onPress={onPress}>
    <View style={styles.list}>
      <Icon name="cutlery" size={25} />
      <View style={styles.middleText}>
        <Text style={styles.listText}>{food.name}</Text>
        <Text style={styles.extraSmallListText}>{food.calories} kcal</Text>
      </View>
    </View>
  </TouchableNativeFeedback>
)

export default FoodList
