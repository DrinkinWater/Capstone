import React, { Component } from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import styles from './styles'

const MenuList = ({ onPress, children }) => (
  <TouchableNativeFeedback
    onPress={onPress}>
    <View style={styles.list}>
      <Text style={styles.listText}>{children}</Text>
    </View>
  </TouchableNativeFeedback>
)
export default MenuList
