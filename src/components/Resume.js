/* eslint-disable no-dupe-keys */
import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { withStyles, CssBaseline, Fade, Tooltip } from "@material-ui/core";
import * as Strings from "../constants/Strings";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 2
  },
  resumeDocument: {
    [theme.breakpoints.up("sm")]: {
      width: "100vh",
      height: "70vh"
    },
    [theme.breakpoints.down("xs")]: {
      width: "60vh",
      height: "70vh"
    }
  },
  documentIcon: {
    fontSize: 45,
    color: "white",
    margin: theme.spacing.unit * 2
  },
  resumeDocumentContainer: {
    textAlign: "center"
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center"
  }
});

function Resume(props) {
  const { classes } = props;
  return (
    <Fragment>
      <CssBaseline />
      <Fade in timeout={750}>
        <div className={classes.root}>
          <div className={classes.resumeDocumentContainer}>
            <iframe
              className={classes.resumeDocument}
              title="resumeWord"
              src="https://docs.google.com/document/d/e/2PACX-1vQyw2WHh1z6LwlCKnfRasqvxA_2b5H_0s5dTWBZlUBIEl5k3NodmJbH_Fs_WtpQEq6orW2DEs9doDGJ/pub?embedded=true"
            />
          </div>

          <div className={classes.iconContainer}>
            <Tooltip
              TransitionComponent={Fade}
              disableFocusListener={true}
              title={Strings.GOOGLE_DRIVE}
            >
              <a
                href="https://drive.google.com/file/d/1BWM6-m2zL51kP1gf2tINOMtXWwyVFFQn/view?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className={`fab fa-google-drive ${classes.documentIcon}`} />
              </a>
            </Tooltip>

            <Tooltip
              TransitionComponent={Fade}
              disableFocusListener={true}
              title={Strings.ONE_DRIVE}
            >
              <a
                href="https://1drv.ms/w/s!AruKrT6K1gHDgZB5GismPR1vtzidXA"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className={`fas fa-cloud  ${classes.documentIcon}`} />
              </a>
            </Tooltip>
          </div>
        </div>
      </Fade>
    </Fragment>
  );
}

Resume.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Resume);
