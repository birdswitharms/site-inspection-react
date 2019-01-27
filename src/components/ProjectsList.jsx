import React, { Fragment, Component } from 'react'
import { QueryRenderer } from 'react-relay'

import environment from '../helpers/RelayEnvironment'
import ProjectsQuery from '../queries/ProjectsQuery'

class ProjectsList extends Component {
  render() {
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
            const { projects } = props
            return (
              <Fragment>
                {projects.map(project =>
                  <div>
                    <h1>{project.name}</h1>
                    <h2>{project.jobNumber}</h2>
                </div>)}
              </Fragment>
            )
          }
        }}
      />
    )
  }
}

export default ProjectsList
