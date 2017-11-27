import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const ProfileInfo = ({ onPress, title, content }) => (
  <View style={styles.profileInfo}>
    <Text style={styles.profileTitle}>{title}</Text>
    <Text style={styles.profileContent}>{content}</Text>
  </View>
)
export default ProfileInfo
