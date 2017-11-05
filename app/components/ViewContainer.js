import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

const ViewContainer = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }

})

export default ViewContainer
