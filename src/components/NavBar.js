/* eslint-disable no-dupe-keys */
import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Button, Typography, Toolbar, withStyles, CssBaseline} from '@material-ui/core/'
 

const styles = {
  root: {
    flexGrow: 1,
    padding: '2em',
    right:0,
    left: 0,
  },
  title: {
    flexGrow: 1,
    marginLeft: 20,
    fontSize: 32,
    fontFamily: 'Montserrat',
  },
  button: {
    paddingLeft: 50,
    paddingRight: 50,
    color: 'white',
    fontFamily: 'Montserrat',
  },
  appBar:{
    background: '#085078',  /* fallback for old browsers */
    background: '-webkit-linear-gradient(to right, #85D8CE, #085078)',  /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear-gradient(to right, #85D8CE, #085078)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: 'white',
    
  },
  titleButton: {
    color: 'inherit',
    textDecoration: 'none',
  },
};

function NavBar(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <CssBaseline/>
    <div className={classes.root}>
      <AppBar color="inherit" className = {classes.appBar} style={{ margin: 0 }}>
        <Toolbar>
          
          <Typography variant="h6" color="inherit" className={classes.title}>
            <a className = {classes.titleButton} href="/">Segev Haviv</a>
          </Typography>

          <Button href="projects" className={classes.button}>Projects</Button>
          <Button href="resume" className={classes.button}>Resume</Button>
          <Button href="contact"className={classes.button}>Contact</Button>

        </Toolbar>
      </AppBar>
    </div>
    </React.Fragment>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);