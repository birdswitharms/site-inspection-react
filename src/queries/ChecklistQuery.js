import { graphql } from 'react-relay';

const ChecklistQuery = graphql`
  query ChecklistQuery($id: ID!) {
    checklist: node(id: $id) {
      ... on Checklist {
        name
        id
        project {
          name
        }
        task {
          completed
          description
        }
        user {
          name
        }
      }
    }
  }
`

export default ChecklistQuery
