import React from "react";
import avatar from "../assets/images/avatarImg.png";
import { landingPageIcons } from "../store";
import PropTypes from "prop-types";

import * as Strings from "../constants/Strings";
import {
  Typography,
  withStyles,
  Tooltip,
  Fade,
  CssBaseline,
  IconButton,
  Avatar
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";

const styles = theme => ({
  root: {
    textAlign: "center",
    margin: "auto",
    color: "white",

    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing.unit * 3,
      width: "85%"
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing.unit * 8,
      width: "60%"
    }
  },
  bannerHr: {
    color: "white"
  },
  avatar: {
    margin: "auto",
    [theme.breakpoints.up("sm")]: {
      width: "25%",
      height: "100%"
    },
    [theme.breakpoints.down("xs")]: {
      width: "40vw",
      height: "20vh"
    }
  },
  bannerText: {
    color: "inherit",
    fontFamily: "Oxygen"
  },
  icons: {
    [theme.breakpoints.up("sm")]: {
      fontSize: 50,
      marginRight: theme.spacing.unit * 3
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 50,
      marginRight: 0
    }
  }
});

function LandingPage(props) {
  const { classes } = props;
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Fade in timeout={750}>
      <div className={classes.root}>
        <CssBaseline />
        <Avatar className={classes.avatar} src={avatar} alt="avatar" />

        <Typography
          className={`${classes.bannerText} ${classes.name}`}
          gutterBottom
          variant="h4"
        >
          {Strings.TITLE}
        </Typography>

        <Typography
          className={`${classes.bannerText} ${classes.title}`}
          gutterBottom
          variant={smallScreen ? "h5" : "h3"}
        >
          {Strings.ROLE}
        </Typography>

        <hr variant="middle" className={classes.bannerHr} />

        <Typography
          className={`${classes.bannerText} ${classes.title}`}
          gutterBottom
          variant="h6"
        >
          {Strings.SKILLS}
        </Typography>

        {landingPageIcons.map(dataIcon => {
          return (
            <Tooltip
              key={dataIcon.title}
              TransitionComponent={Fade}
              disableFocusListener={true}
              title={dataIcon.title}
            >
              <IconButton
                key={dataIcon.link}
                color="inherit"
                target="blank"
                href={dataIcon.link}
                className={`${dataIcon.icon} ${classes.icons}`}
              />
            </Tooltip>
          );
        })}
      </div>
    </Fade>
  );
}

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LandingPage);
