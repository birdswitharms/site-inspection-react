import { graphql } from 'react-relay';

const ProjectQuery = graphql`
  query ProjectQuery($id: ID!) {
    project(id: $id) {
      gcCompany
      address
      checklists {
        name
        id
      }
      id
      jobNumber
      name
      permitNumber
    }
  }
`

export default ProjectQuery
