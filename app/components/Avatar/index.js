import React from 'react'
import { Image } from 'react-native'
import styles from './styles'

const Avatar = () => (
  <Image
    source={require('../../../assets/images/avatar.jpeg')}
    style={styles.avatar}
    />
)

Avatar.Doctor = (style) => (
	<Image
		source={require('../../../assets/images/avatar2.jpeg')}
    style={[styles.smallavatar, style]}
    />
)

Avatar.Doctor1 = (style) => (
	<Image
		source={require('../../../assets/images/avatar3.jpg')}
    style={[styles.smallavatar, style]}
    />
)
export default Avatar
