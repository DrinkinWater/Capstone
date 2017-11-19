import React, { Component } from 'react'
import { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles'
import Colors from '../../constants/Colors'

const GradientPanel = ({ style, children, colors }) => (
  <LinearGradient
    colors={colors || [Colors.mainGreen, Colors.mainLightGreen]}
    start={{x: 0.0, y: 0.25}}
    end={{x: 0.5, y: 1.0}}
    style={[styles.linearGradient, style]}>
    {children}
  </LinearGradient>
)

export default GradientPanel
