import React, { Component } from 'react';
import { get } from 'lodash';
import { QueryRenderer } from 'react-relay';
import { withRouter } from 'react-router-dom';
import environment from '../helpers/RelayEnvironment';
import Loader from './Loader';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Forward from '@material-ui/icons/ForwardRounded'
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

import query from '../queries/ProjectQuery';

const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 2,
  },
  paper: {
    margin: theme.spacing.unit * 2,
    display: 'flex',
    flexDirection: 'column',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  header: {
    fontSize: '1.5rem',
    marginBottom: theme.spacing.unit * 2,
    textAlign: 'left',
  },
  subHeader: {
    fontSize: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.unit * 2,
    fontWeight: '500',
  },
  detailsLeft: {
    color: 'grey',
    fontWeight: '500',
  }
});

class ProjectPage extends Component {
  render() {
    const { match: { params: { id } } } = this.props;
    const variables = { id };
    const rendererProps = { query, variables, environment };
    const { classes } = this.props;

    return (
      <QueryRenderer
        {...rendererProps}
        render={({ error, props }) => {
          if (error) {
            console.log({error})
            return <div>Error!</div>
          }
          if (!props) {
            return <Loader/>
          } else {
            const { project } = props
            const checklists = get(project, 'checklists', {})
            return (
              <>
                <Paper className={classes.paper}>
                  <Typography variant="h6" className={classes.header}>
                    #{project.jobNumber} - {project.name}<Divider/>
                  </Typography>
                  <div className={classes.subHeader}>
                    <div>General Contractor:</div><div className={classes.detailsLeft}>{project.gcCompany}</div>
                  </div>
                  <div className={classes.subHeader}>
                    <div>Address:</div><div className={classes.detailsLeft}>{project.address}</div>
                  </div>
                  <div className={classes.subHeader}>
                    <div>Permit Number:</div><div className={classes.detailsLeft}>{project.permitNumber}</div>
                  </div>
                </Paper>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {checklists.map(checklist => (
                      <TableRow key={checklist.id}>
                        <TableCell component="th" scope="row">
                          {checklist.name}
                        </TableCell>
                        <TableCell align="right" onClick={() => this.props.history.push("/checklist/"+checklist.id)}>
                          <IconButton >
                            <Forward name={checklist.id}/>
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </>
            )
          }
        }}
      />
    )
  }
}

export default withRouter(withStyles(styles)(ProjectPage));
