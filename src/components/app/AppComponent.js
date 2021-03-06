import React from 'react'
import {pink800} from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import HeaderComponent from '../header/HeaderComponent'
import GridComponent from '../grid/GridComponent'
import './AppComponent.css'
import injectTapEventPlugin from 'react-tap-event-plugin'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: pink800
  }
})

const AppComponent = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div className='app'>
      <HeaderComponent title='D&D Helper' />
      <div className='app-body'>
        <GridComponent />
      </div>
    </div>
  </MuiThemeProvider>
)

export default AppComponent
