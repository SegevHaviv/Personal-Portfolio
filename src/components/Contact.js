/* eslint-disable no-dupe-keys */
import React, { Component } from "react";
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
    position: "fixed",
    width: "100%",
    height: "100%",
    margin: "auto",
    paddingTop: "2vh",
    justifyContent: "center",
    background: "#085078" /* fallback for old browsers */,
    background:
      "-webkit-linear-gradient(to right, #85D8CE, #085078)" /* Chrome 10-25, Safari 5.1-6 */,
    background:
      "linear-gradient(to right, #85D8CE, #085078)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  contactGrid: {
    background: "white",
    textAlign: "center",
    justifyContent: "center",
    width: "80%",
    height: "85%",
    color: "black",
    background: "white",
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
  }
};

class Contact extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Fade in timeout={1500}>
          <Grid container spacing={24} className={classes.contactGrid}>
            <Grid
              item
              xs={6}
              style={{ justifyContent: "center", marginTop: 25 }}
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer more recently
                with desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
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
                  <Typography
                    variant="h4"
                    style={{ fontFamily: "Anton", fontWeight: "bold" }}
                  >
                    <i
                      style={{ margin: 25, marginRight: 50 }}
                      class="fa fa-phone-square"
                      aria-hidden="true"
                    />
                    +972-527363711
                  </Typography>
                </ListItem>

                <ListItem>
                  <Typography
                    variant="h4"
                    style={{ fontFamily: "Anton", fontWeight: "bold" }}
                  >
                    <i
                      style={{ margin: 25, marginRight: 50 }}
                      class="fa fa-envelope"
                      aria-hidden="true"
                    />
                    segevhaviv@gmail.com
                  </Typography>
                </ListItem>

                <ListItem>
                  <Typography
                    variant="h4"
                    style={{ fontFamily: "Anton", fontWeight: "bold" }}
                  >
                    <i
                      style={{ margin: 25, marginRight: 50 }}
                      class="fa fa-home"
                      aria-hidden="true"
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
