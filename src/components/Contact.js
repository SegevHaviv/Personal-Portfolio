import React from "react";
import PropTypes from "prop-types";

import {
  withStyles,
  Grid,
  Avatar,
  Typography,
  Divider,
  Fade
} from "@material-ui/core";
import avatar from "../assets/images/avatarImg.png";
import * as Strings from "../constants/Strings";
import { useTheme } from "@material-ui/styles";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 4
  },
  contactGridContainer: {
    background: "white",
    border: "2px solid grey",
    margin: "auto",

    [theme.breakpoints.up("sm")]: {
      width: "75%",
      height: "70%"
    },
    [theme.breakpoints.down("xs")]: {
      width: "95%",
      height: "70%"
    }
  },

  avatar: {
    [theme.breakpoints.down("xs")]: {
      width: "35vw",
      height: "25vh",
      marginBottom: 20
    },
    [theme.breakpoints.up("sm")]: {
      width: "35%",
      height: "35%"
    },
    margin: "auto"
  },
  descrpitionText: {
    marginTop: theme.spacing.unit * 4,
    fontFamily: "Oxygen"
  },
  contactDetails: {
    fontFamily: "Oxygen"
  },
  contactIcon: {
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing.unit * 3
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginTop: theme.spacing.unit * 6,
      fontSize: 30,
      textAlign: "center"
    }
  },
  divider: {
    backgroundColor: "black"
  }
});

function Contact(props) {
  const { classes } = props;
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div className={classes.root}>
      <Fade in timeout={750}>
        <Grid container spacing={24} className={classes.contactGridContainer}>
          <Grid item xs={6}>
            <Typography
              gutterBottom
              variant={smallScreen ? "h5" : "h2"}
              align="center"
              style={{ fontFamily: "Raleway" }}
            >
              {Strings.NAME}
            </Typography>

            <Avatar className={classes.avatar} src={avatar} alt="avatar" />

            <Typography
              className={classes.descrpitionText}
              variant={smallScreen ? "subtitle1" : "h6"}
              align="center"
            >
              {Strings.DESCRIPTION}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography
              gutterBottom
              variant={smallScreen ? "h5" : "h2"}
              align="center"
              style={{ fontFamily: "Raleway" }}
            >
              {Strings.CONTACT_ME_TITLE}
            </Typography>

            <Divider className={classes.divider} />

            <Typography
              variant={smallScreen ? "subtitle1" : "h4"}
              className={classes.contactDetails}
            >
              <i className={`fa fa-phone-square ${classes.contactIcon}`} />
              {Strings.PHONE}
            </Typography>

            <Typography
              variant={smallScreen ? "body2" : "h4"}
              className={classes.contactDetails}
              align="center"
              inline={true}
            >
              <i className={`fa fa-envelope ${classes.contactIcon}`} />
              {Strings.EMAIL}
            </Typography>

            <Typography
              variant={smallScreen ? "subtitle1" : "h4"}
              className={classes.contactDetails}
              align="center"
              inline={true}
            >
              <i className={`fa fa-home ${classes.contactIcon}`} />
              {smallScreen ? (
                <div>{Strings.RESIDENCE_LOCATION}</div>
              ) : (
                <span>{Strings.RESIDENCE_LOCATION}</span>
              )}
            </Typography>
          </Grid>
        </Grid>
      </Fade>
    </div>
  );
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contact);
