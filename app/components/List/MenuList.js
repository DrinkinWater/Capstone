import React, { Component } from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'
import Colors from '../../constants/Colors'

const MenuList = ({ onPress, children }) => (
  <TouchableNativeFeedback
    onPress={onPress}
    delayPressIn={0} >
    <View style={styles.list}>
      <Text style={styles.listText}>{children}</Text>
      <Icon name="angle-right" size={20} color={Colors.grey} />
    </View>
  </TouchableNativeFeedback>
)
export default MenuList
