import React from 'react';
import Login from './Login';
import NavigationMenu from './NavigationMenu';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    text: {
      primary: '#000000',
      secondary: '#FFFFFF'
    }
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  )
}

export default App;
