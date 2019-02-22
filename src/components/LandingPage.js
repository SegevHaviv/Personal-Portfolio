
import React, { Fragment, PureComponent } from "react";
import avatar from "../assets/images/avatarImg.png";

import {
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core/styles";

import {
  Typography,
  withStyles,
  Tooltip,
  Fade,
  CssBaseline,
  IconButton,
  Avatar
} from "@material-ui/core";

import "../App.css";
import { landingPageIcons } from "../store";

const theme = createMuiTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        backgroundColor: "black",
        fontSize:"0.7em"
      }
    }
  }
});

const styles = ({
  root: {
    textAlign: "center",
  },

  banner: {
    textAlign: "center",
    color: "white",
    width: "55%",
    margin: "5vh auto auto auto",
  },
  bannerHr: {
    color: "white"
  },
  avatar: {
    width: "25%",
    height: "100%",
    margin: "auto"
  },
  bannerText: {
    color:"inherit",
    fontFamily:"Oxygen",
  }
});

class LandingPage extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <Fade in timeout={{ enter: 1500 }}>
            <div className={classes.banner}>
              <Avatar className={classes.avatar} src={avatar} alt="avatar" />

              <Typography className={classes.bannerText} gutterBottom variant="h4">
                Hi, I'm Segev
              </Typography>

              <Typography className={classes.bannerText} gutterBottom variant="h3">
                A Full Stack Developer
              </Typography>

              <hr variant="middle" className={classes.bannerHr} />

              <Typography className={classes.bannerText}gutterBottom variant="h6">
                HTML & CSS | Bootstrap | JavaScript | React | NodeJS | Express |
                MongoDB
              </Typography>

              <div>
                {landingPageIcons.map(dataIcon => {
                  return (
                    <MuiThemeProvider theme={theme}>
                    <Tooltip
                      key={dataIcon.title}
                      TransitionComponent={Fade}
                      disableFocusListener={true}
                      title={dataIcon.title}
                    > 
                      <IconButton
                        style={{ fontSize: 50, marginRight: 25 }}
                        color="inherit"
                        target="blank"
                        href={dataIcon.link}
                        className={dataIcon.icon}
                      />
                     </Tooltip>
                     </MuiThemeProvider>
                  );
                })}
              </div>
            </div>
          </Fade>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(LandingPage);
