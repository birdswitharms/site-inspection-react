import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBackRounded'
import Home from '@material-ui/icons/HomeRounded'

const styles = {
  root: {
    flexGrow: 1,
  },
};

class SimpleAppBar extends Component {
  render () {
    const { classes } = this.props;
    const handleHome = () => this.props.history.push('/')
    const goBack = (props) => {
      this.props.history.goBack();
    };

    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            { window.location.pathname === '/' ? null : <ArrowBack onClick={goBack} /> }
            <Typography variant="h6" className={classes.root} style={{'paddingLeft': '1rem', 'color': 'white'}}>
              Bering Mechanical
            </Typography>
            <IconButton color="inherit" onClick={handleHome} >
              <Home />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(SimpleAppBar));
