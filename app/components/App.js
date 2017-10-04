import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Navigator from '../navigation/Navigator'
import configureStore from '../store'
import { API_ROOT } from '../config/api'

const store = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}
