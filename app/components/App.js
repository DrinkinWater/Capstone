import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation';

import Navigator from '../navigation/Navigator'
import ViewContainer from './ViewContainer'
import { COLOR, ThemeProvider } from 'react-native-material-ui';
import configureStore from '../store'
import { API_ROOT } from '../config/api'

const store = configureStore()

// you can set your style right here, it'll be propagated to application
const uiTheme = {
  palette: {
    primaryColor: COLOR.blue500,
    accentColor: COLOR.red500,
    disabledColor: COLOR.grey500,
    defaultColor: COLOR.purple500,
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
};

class App extends Component {
  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <ViewContainer>
          <Navigator
            navigation={
              addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav,
              })
            } />
        </ViewContainer>
      </ThemeProvider>
    )
  }
}

const mapStateToProps = state => ({
  nav: state.nav
})

const AppWithNavigation = connect(mapStateToProps)(App)

export default () => (
  <Provider store={store}>
    <AppWithNavigation />
  </Provider>
)
