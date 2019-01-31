import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    grid: {
        paddingTop: 150,
        paddingBottom: 400,
        background: 'rgba(0, 0, 0, 0) linear-gradient(to right, rgb(55, 59, 68), rgb(66, 134, 244)) repeat scroll 0% 0%;',
        textAlign: 'center',
        color: 'white',
        whiteSpace: 'noWrap',
    },
  });
  
const CustomGrid = (props) => {
    const { classes } = props;
  
    return (
      <div className={classes.root}>
        <Grid container spacing={36}>

          <Grid item xs={12} className ={classes.grid} id="titleGrid">


            <Typography color='inherit' align='cetner' variant="h1">Hi, I'm Segev </Typography>    
            <h1><strong>A Full Stack Developer</strong></h1>
          </Grid>

          <Grid item xs={12} className ={classes.grid} id="resumeGrid">
            <h1 style={{fontSize: 150}}>Resume</h1>
          </Grid>

          <Grid item xs={12} className ={classes.grid} id="projectsGrid">
          <h1 style={{fontSize: 150}}>Projects</h1>
          </Grid>

          <Grid item xs={12} className ={classes.grid} id="contactGrid">
          <h1 style={{fontSize: 150}}>Contact</h1>
          </Grid>


        </Grid>
      </div>
    );
  }
  
  CustomGrid.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(CustomGrid);