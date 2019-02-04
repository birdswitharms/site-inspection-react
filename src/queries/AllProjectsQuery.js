import { graphql } from 'babel-plugin-relay/macro';

const AllProjectsQuery = graphql`
  query AllProjectsQuery {
    allProjects {
      id
      name
      jobNumber
    }
  }
`;

export default AllProjectsQuery;
