import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Forward from '@material-ui/icons/ForwardRounded'

import { QueryRenderer } from 'react-relay';
import environment from '../helpers/RelayEnvironment';
import ProjectsQuery from '../queries/ProjectsQuery';
import Loader from './Loader';


const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: '100vw',
  },
});

function ProjectsTable(props) {
  const { classes } = props;

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
            return <Loader/>
          } else {
            let { allProjects } = props
            let newData = allProjects.map((project) =>
              ({...project})
            )
            return (
              <Paper className={classes.root}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Job Number</TableCell>
                      <TableCell align="left">Name</TableCell>
                      <TableCell align="right">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {newData.map(project => (
                      <TableRow key={project.id}>
                        <TableCell component="th" scope="row">
                          {project.jobNumber}
                        </TableCell>
                        <TableCell align="left">{project.name}</TableCell>
                        <TableCell align="right"><Forward/></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            )
          }
        }}
      />
  );
}

ProjectsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectsTable);
