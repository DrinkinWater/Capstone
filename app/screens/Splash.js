import React, { Component } from 'react'
import { Text, View, StyleSheet, ActivityIndicator, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import fetchApi from '../api'

export default class Splash extends Component {
  async componentWillMount() {
    const { navigate } = this.props.navigation

    let response = await fetchApi('/auth/validate_token', 'get')

    if (response) {
      navigate('UserProfile')
    } else {
      navigate('LogIn')
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to BendAid</Text>
        <ActivityIndicator animating={true} size={30} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10
  }
})

// const mapDispatchToProps = disptach => ({
//   checkLogedIn: () => {
//     disptach(checkUserLogedIn())
//   }
// })
//
// export default connect(null, mapDispatchToProps)(Splash)
