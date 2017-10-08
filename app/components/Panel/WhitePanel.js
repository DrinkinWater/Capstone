import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './styles'

const WhitePanel = ({ children }) => (
  <View style={styles.whitePanel}>
    {children}
  </View>
)

export default WhitePanel
