import React, { Component } from 'react'
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { validateUser } from '../actions/auth'

class Splash extends Component {
  componentWillMount() {
    this.props.validateUser()
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

const mapDispatchToProps = dispatch => ({
  validateUser: () => {
    dispatch(validateUser())
  }
})

export default connect(null, mapDispatchToProps)(Splash)
