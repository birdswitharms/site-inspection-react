import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { themeDetails } from './helpers/ui/theme';
import LoginPage from './components/LoginPage';
import ProjectsPage from './components/ProjectsPage';
import ProjectPage from './components/ProjectPage';
import ChecklistPage from './components/ChecklistPage';
import AppBar from './components/AppBar';

class App extends Component {
  render() {
    const theme = createMuiTheme(themeDetails);

    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <>
            <AppBar />
            <Switch>
              <Route exact path="/" component={LoginPage} />
              <Route exact path="/projects" component={ProjectsPage} />
              <Route exact path="/project/:id" component={ProjectPage} />
              <Route exact path="/checklist/:id" component={ChecklistPage} />
            </Switch>
          </>
          </BrowserRouter>
        </MuiThemeProvider>
    </React.Fragment>
    )
  }
}

export default App;
