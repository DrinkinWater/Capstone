import React, { Component } from 'react'
import { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles'
import Colors from '../../constants/Colors'

const GradientPanel = ({ style, children, colors }) => (
  <LinearGradient
    colors={colors || [Colors.mainGreen, Colors.mainLightGreen]}
    style={[styles.linearGradient, style]}>
    {children}
  </LinearGradient>
)

export default GradientPanel
