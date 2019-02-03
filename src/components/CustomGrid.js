/* eslint-disable no-dupe-keys */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Grid, CssBaseline } from '@material-ui/core';

import Resume from './Resume';
import TitleLayout from './LandingPage';
import Projects from './Projects'
import Contact from './Contact'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    color: 'white',
    background: '#085078',  /* fallback for old browsers */
    background: '-webkit-linear-gradient(to right, #85D8CE, #085078)',  /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear-gradient(to right, #85D8CE, #085078)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    textAlign: 'center',
  },
});

const CustomGrid = (props) => {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      
      <div className={classes.root}>
        <Grid container spacing={36}>

          <Grid item xs={12} className={classes.grid} id="title">
            <TitleLayout/>
          </Grid>

          <Grid item xs={12} className={classes.grid} id="projects">
            <Projects/>
          </Grid>

          <Grid item xs={12} className={classes.grid} id="resume">
            <Resume/>
          </Grid>

          <Grid item xs={12} className={classes.grid} id="contact">
            <Contact/>
          </Grid>

        </Grid>
      </div>
    </React.Fragment>
  );
}

CustomGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomGrid);