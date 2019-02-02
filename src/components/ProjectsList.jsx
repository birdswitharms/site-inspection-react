import React, { Component } from 'react'
import { QueryRenderer } from 'react-relay'
import styled from 'styled-components'

import environment from '../helpers/RelayEnvironment'
import TableHeader from '../components/TableHeader';
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
                <TableHeader />
                {allProjects.map(project =>
                  <div>
                    <span>{project.jobNumber}</span><span>{project.name}</span>
                  </div>
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
