/* eslint-disable no-dupe-keys */
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import PersistentDrawer from './PersistentDrawer'
import {
  AppBar,
  Button,
  Typography,
  Toolbar,
  withStyles,
} from "@material-ui/core/";

const styles = theme => ({
  root: {
    width: "100%",
  },
  title: {
    textTransform: "capitalize",
    marginLeft: 20,
    fontFamily: "Oxygen"
  },
  titleContainer: {
    marginRight: "auto",
  },
  appBar: {
    background: "#232526",  /* fallback for old browsers */
    background: "-webkit-linear-gradient(to right, #414345, #232526)",  /* Chrome 10-25, Safari 5.1-6 */
    background: "linear-gradient(to top, #000000, #232526)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  titleButton: {
    color: "inherit",
    textDecoration: "none"
  },

});

class NavBar extends Component {
  render() {

    const { classes, onSelect, onTitleSelected,index } = this.props;
    return (
      <Fragment>
        <div className={classes.root}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <div className={classes.titleContainer}>

                <Button className={classes.titleButton} onClick={onTitleSelected}>
                  <Typography variant="h6" color="inherit" className={classes.title} >
                    Segev Haviv
                  </Typography>
                </Button>

              </div>

              <PersistentDrawer onSelectedDrawerTab={onSelect} index={index}/>

            </Toolbar>
          </AppBar>
        </div>
      </Fragment>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
