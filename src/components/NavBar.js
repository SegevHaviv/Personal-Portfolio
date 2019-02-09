/* eslint-disable no-dupe-keys */
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Button,
  Typography,
  Toolbar,
  withStyles,
  CssBaseline,
  Tab,
  Tabs
} from "@material-ui/core/";

const styles = {
  root: {
    flexGrow: 1,
    padding: "2em",
    right: 0,
    left: 0
  },
  title: {
    textTransform: "capitalize",
    marginLeft: 20,
    fontSize: 32,
    fontFamily: "Montserrat"
  },
  titleContainer: {
    flexGrow: 1
  },
  tab: {
    paddingLeft: 50,
    paddingRight: 50,
    color: "white",
    fontFamily: "Montserrat"
  },
  appBar: {
    background: "#085078" /* fallback for old browsers */,
    background:
      "-webkit-linear-gradient(to right, #85D8CE, #085078)" /* Chrome 10-25, Safari 5.1-6 */,
    background:
      "linear-gradient(to right, #85D8CE, #085078)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
    color: "white"
  },
  titleButton: {
    color: "inherit",
    textDecoration: "none"
  },
  bigIndicator: {
    height: 0
  }
};

class NavBar extends Component {
  render() {
    const { classes, onSelect, tabValue, onTitleSelected } = this.props;

    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar
            color="inherit"
            className={classes.appBar}
            style={{ margin: 0 }}
          >
            <Toolbar>
              <div className={classes.titleContainer}>
                <Button
                  className={classes.titleButton}
                  onClick={onTitleSelected}
                >
                  <Typography
                    variant="h6"
                    color="inherit"
                    className={classes.title}
                  >
                    Segev Haviv
                  </Typography>
                </Button>
              </div>

              <Tabs
                centered
                value={tabValue}
                onChange={(e, index) => onSelect(index)}
                className={classes.tab}
                classes={{ indicator: classes.bigIndicator }}
              >
                <Tab label="Projects" />
                <Tab label="Resume" />
                <Tab label="Contact" />
              </Tabs>
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
