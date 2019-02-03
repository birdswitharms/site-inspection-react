import { graphql } from 'babel-plugin-relay/macro';

const ProjectsQuery = graphql`
  query ProjectsQuery {
    allProjects {
      id
      name
      jobNumber
    }
  }
`;

export default ProjectsQuery;
