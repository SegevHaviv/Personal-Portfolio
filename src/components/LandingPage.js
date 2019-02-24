
import React, { PureComponent } from "react";
import avatar from "../assets/images/avatarImg.png";
import "../App.css";
import { landingPageIcons } from "../store";
import {Typography, withStyles, Tooltip, Fade, CssBaseline, IconButton, Avatar} from "@material-ui/core";

const styles = theme => ({
  root: {
    textAlign: "center",
    margin: "auto",
    color:"white",
    width: "55%",
    [theme.breakpoints.down('xs')]:{
      marginTop: theme.spacing.unit * 3,
    },
    [theme.breakpoints.up('sm')]:{
      marginTop: theme.spacing.unit * 8,
    }
  },
  bannerHr: {
    color: "white"
  },
  avatar: {
    width: "25%",
    height: "100%",
    fontSize: "100",
    margin: "auto"
  },
  bannerText: {
    color:"inherit",
    fontFamily:"Oxygen",
  },
  name: {

  },
  title: {

  },
  skills: {

  }
});

class LandingPage extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
          <Fade in timeout={750}>
            <div className={classes.root}>
              <CssBaseline />
              <Avatar className={classes.avatar} src={avatar} alt="avatar"/>

              <Typography className={`${classes.bannerText} ${classes.name}`} gutterBottom variant="h4">
                Hi, I'm Segev
              </Typography>

              <Typography className={`${classes.bannerText} ${classes.title}`} gutterBottom variant="h3">
                A Full Stack Developer
              </Typography>

              <hr variant="middle" className={classes.bannerHr} />

              <Typography className={`${classes.bannerText} ${classes.title}`} gutterBottom variant="h6">
                HTML & CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB
              </Typography>

                {
                  landingPageIcons.map(dataIcon => {
                  return (
                      <Tooltip  key={dataIcon.title}  TransitionComponent={Fade}
                      disableFocusListener={true}  title={dataIcon.title}
                      > 

                      <IconButton
                        style={{ fontSize: 50, marginRight: 25 }} key={dataIcon.link}
                        color="inherit" target="blank"
                        href={dataIcon.link} className={dataIcon.icon}
                      />
                     </Tooltip>
                  );
                })}
           </div>
        </Fade>
    );
  }
}

export default withStyles(styles)(LandingPage);
