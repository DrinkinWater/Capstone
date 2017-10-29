import React from 'react'
import { Image } from 'react-native'
import styles from './styles'

const Avatar = () => (
  <Image
    source={require('../../../assets/images/avatar.jpeg')}
    style={styles.avatar}
    />
)

export default Avatar
