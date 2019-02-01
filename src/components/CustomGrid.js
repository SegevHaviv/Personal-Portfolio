import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Grid, Typography } from '@material-ui/core';
import Resume from './Resume';
import TitleLayout from './TitleLayout';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    color: 'white',
    background: '#085078',  /* fallback for old browsers */
    background: '-webkit-linear-gradient(to right, #85D8CE, #085078)',  /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear-gradient(to right, #85D8CE, #085078)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
    paddingTop: 150,
    paddingBottom: 400,
    textAlign: 'center',
  },
});

const CustomGrid = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={36}>

        <Grid item xs={12} className={classes.grid} id="title">
          <TitleLayout/>
        </Grid>

        <Grid item xs={12} className={classes.grid} id="resume">
          <Resume/>
        </Grid>

        <Grid item xs={12} className={classes.grid} id="projects">
          <h1 style={{ fontSize: 150 }}>Projects</h1>
        </Grid>

        <Grid item xs={12} className={classes.grid} id="contact">
          <h1 style={{ fontSize: 150 }}>Contact</h1>
        </Grid>


      </Grid>
    </div>
  );
}

CustomGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomGrid);