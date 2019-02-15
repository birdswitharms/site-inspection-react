import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import ExpandIcon from '@material-ui/icons/ExpandMore'

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0,0,0,.125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  },
  expanded: {
    margin: 'auto',
  },
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0,0,0,.03)',
    borderBottom: '1px solid rgba(0,0,0,.125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    width: `${window.innerWidth-52}px`
  },
}))(MuiExpansionPanelDetails);

const styles = theme => ({
  root: {
    width: '100%',
  },
})

class Task extends React.Component {
  state = {
    expanded: 'panel1',
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { description, classes } = this.props
    return (
      <div className={classes.root}>
        <ExpansionPanel
          square
          onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary>
            <div style={{'display': 'flex', 'alignItems': 'center'}}>
              <ExpandIcon style={{'color': 'darkgrey', 'marginRight': '1rem'}}/>
              <div>{description}</div>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{'padding': '1rem'}}>
            <Typography>
              <Button type="submit" variant="contained" color="primary" >
                Upload Image
              </Button>
              <Button type="submit" variant="contained" color="primary" style={{'marginLeft': '1rem'}}>
                Add Notes
              </Button>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default withStyles(styles)(Task);
