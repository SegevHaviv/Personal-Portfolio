import React, { Component } from "react";

import { projectsData, projectsCategories } from "../../store";
import {
  Tabs,
  Tab,
  Typography,
  Card,
  CardMedia,
  CardContent,
  withStyles,
  Button,
  Grid,
  Fade,
  Divider
} from "@material-ui/core";

const styles = {
  card: {
    maxWidth: 300
  },

  media: {
    height: 180,
    textAlign: "center",
    justifyContent: "center"
  },

  cardButton: {
    fontFamily: "Oxygen",
    textTransform: "capitalize",
    flexGrow: 1
  },

  tabsNavigator: {
    color: "white",
    marginBottom: 24
  },

  gridContainer: {
    width: "80%",
    margin: "auto"
  }
};

export function getDataByCategory(projectsData, category) {
  return category === projectsCategories.ALL
    ? projectsData
    : projectsData.filter(x => x.category === category);
}

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: projectsCategories.ALL
    };
  }

  handleChange = (event, category) => {
    console.log(event);
    this.setState({
      category: category
    });
  };

  render() {
    const specificData = getDataByCategory(projectsData, this.state.category);
    return (
      <>
        <Fade in timeout={750}>
          <div className="root" id="root">
            <Tabs
              centered
              value={this.state.category}
              className="tabsNavigator"
              onChange={this.handleChange}
            >
              {Object.entries(projectsCategories).map(([key, value]) => (
                <Tab
                  key={key}
                  label={value}
                  value={value}
                  style={{ textTransform: "capitalize", fontSize: "1em" }}
                />
              ))}
            </Tabs>

            <Grid
              container
              id="gridContainer"
              className="gridContainer"
              spacing={24}
              justify="space-around"
              alignItems="flex-end"
              alignContent="flex-end"
            >
              {specificData.map(project => {
                return (
                  <Grid
                    item
                    xs={4}
                    key={project.title}
                    style={{ minWidth: 300 }}
                  >
                    <Card className="card">
                      <CardMedia
                        className="media"
                        image={project.avatar}
                        title={project.title}
                      />
                      <CardContent className="media">
                        <Typography gutterBottom align="center" variant="h5">
                          {project.title}
                        </Typography>

                        <Typography align="center" className="description">
                          {project.description}
                        </Typography>
                      </CardContent>

                      <Divider />
                      <div style={{ textAlign: "center" }}>
                        <Button
                          variant="text"
                          className="cardButton"
                          color="primary"
                          target="_blank"
                          href={project.gitHubLink}
                          style={{
                            display: project.gitHubLink ? "inline" : "none"
                          }}
                          children="GitHub"
                        />

                        <Button
                          className="cardButton"
                          color="primary"
                          target="_blank"
                          href={project.codePenLink}
                          style={{
                            display: project.codePenLink ? "inline" : "none"
                          }}
                          children="CodePen"
                        />

                        <Button
                          className="cardButton"
                          color="primary"
                          target="_blank"
                          href={project.liveDemo}
                          style={{
                            display: project.liveDemo ? "inline" : "none"
                          }}
                          children="LiveDemo"
                        />
                      </div>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </Fade>
      </>
    );
  }
}

export default withStyles(styles)(Projects);
