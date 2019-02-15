import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import ProjectsTable from './ProjectsTable'

const styles = theme => ({
  header: {
    fontSize: '1.5rem',
    textAlign: 'left',
  },
  paper: {
    margin: theme.spacing.unit * 2,
    display: 'flex',
    flexDirection: 'column',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
});

class ProjectsPage extends Component {
  render() {
    const { classes } = this.props
    return (
      <>
        <Paper className={classes.paper}>
          <Typography variant="h6" className={classes.header}>
            Current Projects
            <Divider/>
          </Typography>
        </Paper>
        <ProjectsTable />
      </>
    )
  }
}

export default withStyles(styles)(ProjectsPage)
