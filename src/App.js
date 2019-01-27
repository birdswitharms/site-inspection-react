import React, { Component } from 'react';
import { QueryRenderer } from 'react-relay';
import environment from './helpers/RelayEnvironment';
import ProjectsQuery from './queries/ProjectsQuery';
import './App.css';

class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={ProjectsQuery}
        variables={{pageId: '1'}}
        render={({ error, props }) => {
          if (error) {
            console.log({error})
            return <div>Error!</div>
          }
          if (!props) {
            return <div>Loading...</div>
          }
          return <div>{JSON.stringify(props)}</div>
        }}
      />
    )
  }
}

export default App;
