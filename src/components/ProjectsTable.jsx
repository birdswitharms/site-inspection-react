import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Forward from '@material-ui/icons/ForwardRounded'
import IconButton from '@material-ui/core/IconButton';

import { QueryRenderer } from 'react-relay';
import environment from '../helpers/RelayEnvironment';
import AllProjectsQuery from '../queries/AllProjectsQuery';
import Loader from './Loader';

const styles = theme => ({
  root: {
    overflowX: 'auto',
  },
  table: {
    maxWidth: '100vw',
  },
});

function ProjectsTable(props) {
  const { classes } = props;
  const parentProps = props;
  return (
    <QueryRenderer
        environment={environment}
        query={AllProjectsQuery}
        render={({ error, props }) => {
          if (error) {
            console.log({error})
            return <div>Error!</div>
          }
          if (!props) {
            return <Loader/>
          } else {
            let { allProjects } = props
            let newData = allProjects.map((project) =>
              ({...project})
            )
            return (
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Job Number</TableCell>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {newData.map(project => (
                    <TableRow key={project.id}>
                      <TableCell component="th" scope="row">
                        {project.jobNumber}
                      </TableCell>
                      <TableCell align="left">{project.name}</TableCell>
                      <TableCell align="right" onClick={() => parentProps.history.push("/project/"+project.id)}>
                        <IconButton >
                          <Forward />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )
          }
        }}
      />
  );
}

ProjectsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(ProjectsTable));
