import React, { Component } from 'react'
import { QueryRenderer } from 'react-relay'
import styled from 'styled-components'

import environment from '../helpers/RelayEnvironment'
import ProjectsQuery from '../queries/ProjectsQuery'

class ProjectsList extends Component {
  render() {
    const ListContainer = styled.div`
      display: flex;
      position: fixed;
      bottom: 0;
      flex-direction: column;
      width: 100%;
    `

    const StyledRow = styled.div`
      font-size: 1.5rem;
      font-weight: bold;
      border-radius: 5px;
      text-align: center;
      padding: 0.5rem;
      background-color: lightgrey;
      border: 1px solid black;
      width: 90%;
      margin: 0 auto;
    `
    return (
      <QueryRenderer
        environment={environment}
        query={ProjectsQuery}
        render={({ error, props }) => {
          if (error) {
            console.log({error})
            return <div>Error!</div>
          }
          if (!props) {
            return <div>Loading...</div>
          } else {
            let { allProjects } = props
            return (
              <ListContainer>
                {allProjects.map(project =>
                  <StyledRow>#{project.jobNumber} - {project.name}</StyledRow>
                )}
              </ListContainer>
            )
          }
        }}
      />
    )
  }
}

export default ProjectsList
