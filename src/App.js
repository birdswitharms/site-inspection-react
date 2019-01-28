import React, { Component } from 'react';
import styled from 'styled-components'
import ProjectsList from './components/ProjectsList';
import LogoHeader from './components/LogoHeader';

class App extends Component {
  render() {
    const Container = styled.div`
      display: flex;

    `

    return (
      <Container>
        <LogoHeader />
        <ProjectsList />
      </Container>
    )
  }
}

export default App;
