import React, { Component } from 'react';
import { get } from 'lodash';
import { QueryRenderer } from 'react-relay';
import environment from '../helpers/RelayEnvironment';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Loader from './Loader';

import query from '../queries/ChecklistQuery';
import Task from './Task';

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

class ChecklistPage extends Component {
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
            const checklist = get(props, 'checklist')
            const tasks = get(checklist, 'task')
            const user = get(checklist, 'user')
            return (
              <>
                <Paper className={classes.paper}>
                  <Typography variant="h6" className={classes.header}>
                  {checklist.name}<Divider/>
                  </Typography>
                  <div className={classes.subHeader}>
                    <div>Owner:</div><div className={classes.detailsLeft}>{user.name}</div>
                  </div>
                  <div className={classes.subHeader}>
                    <div>Percent Complete:</div><div className={classes.detailsLeft}>0%</div>
                  </div>
                </Paper>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Tasks</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tasks.map((task, index) => (
                      <TableRow key={index}>
                        <TableRow component="th" scope="row">
                          <TableCell style={{'padding': '0'}}>
                            <Task key={task.id} description={task.description}/>
                          </TableCell>
                          <TableCell style={{'padding': '0'}}>
                            <Checkbox checked={task.completed} />
                          </TableCell>
                        </TableRow>
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

export default withRouter(withStyles(styles)(ChecklistPage));
