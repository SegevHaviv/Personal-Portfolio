/*eslint no-dupe-keys: 0*/
import React, { Component, Fragment, PureComponent } from "react";
import { projectsData, categoryEnum } from "../store";

import {
  AppBar,
  CssBaseline,
  Tabs,
  Tab,
  withStyles,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Grid,
  Fade,
  Divider
} from "@material-ui/core";

const styles = theme => ({
  root: {
    position: "fixed",
    width: "100%",
    height: "100%",
    background: "#085078" /* fallback for old browsers */,
    background:
      "-webkit-linear-gradient(to right, #85D8CE, #085078)" /* Chrome 10-25, Safari 5.1-6 */,
    background:
      "linear-gradient(to right, #85D8CE, #085078)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
    overflowX: "scroll"
  },

  card: {
    maxWidth: 300
  },

  media: {
    height: 180,
    textAlign: "center",
    justifyContent: "center"
  },

  description: {},

  cardButton: {
    fontWeight: "bold",
    fontFamily: "Montserrat",
    flexGrow: 1
  }
});

class Projects extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  getSpecificProjectsData = (value, projectsData) => {
    const projectSpecificData = projectsData;
    if (value === 0) {
      return projectSpecificData.filter(x => x.category === categoryEnum.REACT);
    } else if (value === 1) {
      return projectSpecificData.filter(
        x => x.category === categoryEnum.JAVASCRIPT
      );
    } else if (value === 2) {
      return projectSpecificData.filter(
        x => x.category === categoryEnum.DOTNET
      );
    } else {
      return projectSpecificData.filter(
        x => x.category === categoryEnum.NODEJS
      );
    }
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const specificData = this.getSpecificProjectsData(value, projectsData);

    return (
      <Fragment>
        <CssBaseline />
        <Fade in timeout={1500}>
          <div className={classes.root}>
            <AppBar
              position="static"
              color="inherit"
              className={classes.appBar}
            >
              <Tabs centered value={value} onChange={this.handleChange}>
                <Tab label="React" />
                <Tab label="JavaScript" />
                <Tab label=".NET" />
                <Tab label="NodeJS" />
              </Tabs>
            </AppBar>

            <div
              style={{
                width: "80%",
                margin: "auto",
                marginTop: 30,
                marginBottom: 80
              }}
            >
              <Grid container spacing={24} justify="center" alignItems="center">
                <Fragment>
                  {specificData.map(project => {
                    return (
                      <Grid item xs={4} key={project.title}>
                        <Card className={classes.card}>
                          <CardMedia
                            className={classes.media}
                            image={project.avatar}
                            title={project.title}
                          />
                          <CardContent className={classes.media}>
                            <Typography
                              gutterBottom
                              align="center"
                              variant="h5"
                              component="h2"
                            >
                              {project.title}
                            </Typography>
                            {/* Problem : Text may overflow. */}
                            <Typography
                              align="center"
                              className={classes.description}
                              component="p"
                            >
                              {project.description}
                            </Typography>
                          </CardContent>

                          <Divider />

                          <Button
                            className={classes.cardButton}
                            color="primary"
                            target="_blank"
                            href={project.gitHubLink}
                            disabled={project.gitHubLink ? false : true}
                          >
                            GitHub
                          </Button>

                          <Button
                            className={classes.cardButton}
                            color="primary"
                            target="_blank"
                            href={project.codePenLink}
                            disabled={project.codePenLink ? false : true}
                          >
                            CodePen
                          </Button>

                          <Button
                            className={classes.cardButton}
                            color="primary"
                            target="_blank"
                            href={project.liveDemo}
                            disabled={project.liveDemo ? false : true}
                          >
                            LiveDemo
                          </Button>
                        </Card>
                      </Grid>
                    );
                  })}
                </Fragment>
              </Grid>
            </div>
          </div>
        </Fade>
      </Fragment>
    );
  }
}
export default withStyles(styles)(Projects);
