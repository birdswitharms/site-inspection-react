import { graphql } from 'babel-plugin-relay/macro';

const ProjectsQuery = graphql`
  query ProjectsQuery {
    allProjects {
      name
      jobNumber
    }
  }
`;

export default ProjectsQuery;
