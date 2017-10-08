import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './styles'

const WhitePanel = ({ style, children }) => (
  <View style={[styles.whitePanel, style]}>
    {children}
  </View>
)

export default WhitePanel
