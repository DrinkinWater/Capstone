import React, { Component } from 'react'
import { Text } from 'react-native'
import Navigator from '../navigation/Navigator'
import ViewContainer from './ViewContainer'
import { COLOR, ThemeProvider } from 'react-native-material-ui';

// you can set your style right here, it'll be propagated to application
const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
};

export default class App extends Component {
  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <ViewContainer>
          <Navigator />
        </ViewContainer>
      </ThemeProvider>
    )
  }
}
