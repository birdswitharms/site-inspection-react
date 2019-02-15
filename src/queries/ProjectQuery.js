import { graphql } from 'react-relay';

const ProjectQuery = graphql`
  query ProjectQuery($id: ID!) {
    project: node(id: $id) {
      ... on Project {
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
  }
`

export default ProjectQuery
