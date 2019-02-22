import React, { PureComponent } from "react";

import {
  withStyles,
  Grid,
  Avatar,
  Typography,
  Divider,
  List,
  ListItem,
  Fade
} from "@material-ui/core";
import avatar from "../assets/images/avatarImg.png";

const styles = {
  root: {  
    marginTop:15  
  },
  contactGrid: {
    background: "white",
    textAlign: "center",
    width: "80%",
    height: "85%",
    border: "2px solid grey",
    margin: "auto"
  },
  avatar: {
    width: "35%",
    height: "35%",
    margin: "auto"
  },
  descrpitionText: {
    marginTop: 35,
    fontFamily: "Oxygen"
  },
  contactDetails: {
    fontFamily: "Oxygen"
  }
};

class Contact extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Fade in timeout={1500}>
          <Grid container spacing={24} className={classes.contactGrid}>
            <Grid
              item
              xs={6}
            >
              <Typography
                gutterBottom
                variant="h2"
                style={{ fontFamily: "Raleway" }}
              >
                Segev Haviv
              </Typography>

              <Avatar className={classes.avatar} src={avatar} alt="avatar" />

              <Typography
                gutterBottom
                variant="h6"
                className={classes.descrpitionText}
              >
                Junior full stack developer with great passion for code,
                especially for web technologies, autodidact with high
                motivitaion to learn and get my hands dirty.
              </Typography>
            </Grid>

            <Grid item xs={6} styles={{ textAlign: "center", marginTop: 10 }}>
              <Typography
                gutterBottom
                variant="h2"
                style={{ fontFamily: "Raleway", marginTop: 25 }}
              >
                Contact Me
              </Typography>

              <Divider style={{ backgroundColor: "black" }} />

              <List style={{ marginLeft: 25, marginTop: 30 }}>
                <ListItem>
                  <Typography variant="h4" className={classes.contactDetails}>
                    <i
                      style={{ margin: 25, marginRight: 40 }}
                      className="fa fa-phone-square"
                      aria-hidden="true"
                    />
                    +972-527363711
                  </Typography>
                </ListItem>

                <ListItem>
                  <Typography
                    variant="h4"
                    className={classes.contactDetails}
                    inline={true}
                  >
                    <i
                      style={{ margin: 25, marginRight: 40 }}
                      className="fa fa-envelope"
                      aria-hidden="true"
                    />
                    segevhaviv@gmail.com
                  </Typography>
                </ListItem>

                <ListItem>
                  <Typography variant="h4" className={classes.contactDetails}>
                    <i
                      style={{ margin: 25, marginRight: 40 }}
                      className="fa fa-home"
                    />
                    Holon, Israel
                  </Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Fade>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);
