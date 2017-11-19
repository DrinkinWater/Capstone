import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native'
import { connect } from 'react-redux'
import { signUpUser } from '../actions/user'

class SignUp extends Component {
  constructor() {
  	super();
  	this.state = {
      name: '',
      email: '',
      ic: '',
      password: '',
      passwordConfirmation: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    this.props.signup(this.state)
  }

  componentDidUpdate() {
    if (this.props.currentUser) {
      this.props.navigation.navigate('UserProfile')
    }
  }

  render() {
    return(
      <View>
        <Text>Sign Up</Text>
        <Text>Name</Text>
        <TextInput
          onChangeText={name => this.setState({ name })} />
        <Text>Email</Text>
        <TextInput
          onChangeText={email => this.setState({ email })} />
        <Text>NRIC (Optional) </Text>
        <TextInput
          onChangeText={ic => this.setState({ ic })} />
        <Text>Password</Text>
        <TextInput
          secureTextEntry
          onChangeText={password => this.setState({ password })} />
        <Text>Confirm Password</Text>
        <TextInput
          secureTextEntry
          onChangeText={passwordConfirmation => this.setState({ passwordConfirmation })} />

        <Button
          title="Done"
          onPress={this.handleSubmit}/>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signup: params => {
    dispatch(signUpUser(params))
  }
})

export default connect(null, mapDispatchToProps)(SignUp)
