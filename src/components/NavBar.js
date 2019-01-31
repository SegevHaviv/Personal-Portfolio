import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Button, Typography, Toolbar, withStyles} from '@material-ui/core/'
 

const styles = {
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    marginLeft: 20,
  },
  button: {
    paddingLeft: 50,
    paddingRight: 50,
  }
};

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          
          <Typography variant="h6" color="inherit" className={classes.title}>
            Segev Haviv
          </Typography>

          <Button href="#resumeGrid" className={classes.button}>Resume</Button>
          <Button href="#projectsGrid" className={classes.button}>Projects</Button>
          <Button href="#contactGrid"className={classes.button}>Contact</Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);