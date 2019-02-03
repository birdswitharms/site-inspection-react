import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { palette } from './helpers/ui/palette';
import LoginPage from './components/LoginPage';
import ProjectsPage from './components/ProjectsPage';
import AppBar from './components/AppBar';

class App extends Component {
  render() {
    const theme = createMuiTheme(palette);

    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <AppBar />
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={LoginPage} />
              <Route exact path="/projects" component={ProjectsPage} />
            </Switch>
          </BrowserRouter>
        </MuiThemeProvider>
    </React.Fragment>
    )
  }
}

export default App;
