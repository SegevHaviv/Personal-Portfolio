/* eslint-disable no-dupe-keys */
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

import { projectsData, projectsCategories } from "../store";
import {
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
  root: {},
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
    marginBottom: theme.spacing.unit * 3
  },
  gridContainer: {
    width: "80%",
    margin: "auto"
  }
});

function getDataByCategory(projectsData, category) {
  return category === projectsCategories.ALL
    ? projectsData
    : projectsData.filter(x => x.category === category);
}

function Projects(props) {
  const [category, setCurrentCategory] = useState(projectsCategories.ALL);
  const { classes } = props;

  const specificData = getDataByCategory(projectsData, category);

  function handleChange(event, category) {
    setCurrentCategory(category);
  }

  return (
    <Fragment>
      <Fade in timeout={750}>
        <div className={classes.root}>
          <Tabs
            centered
            value={category}
            className={classes.tabsNavigator}
            onChange={handleChange}
            style={{ zIndex: 1 }}
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
            className={classes.gridContainer}
            spacing={24}
            justify="center"
            alignItems="center"
          >
            {specificData.map(project => {
              return (
                <Grid item xs={4} key={project.title} style={{ minWidth: 300 }}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.media}
                      image={project.avatar}
                      title={project.title}
                    />
                    <CardContent className={classes.media}>
                      <Typography gutterBottom align="center" variant="h5">
                        {project.title}
                      </Typography>

                      <Typography
                        align="center"
                        className={classes.description}
                      >
                        {project.description}
                      </Typography>
                    </CardContent>

                    <Divider />
                    <div style={{ textAlign: "center" }}>
                      <Button
                        variant="text"
                        className={classes.cardButton}
                        color="primary"
                        target="_blank"
                        href={project.gitHubLink}
                        style={{
                          display: project.gitHubLink ? "inline" : "none"
                        }}
                        children="GitHub"
                      />

                      <Button
                        className={classes.cardButton}
                        color="primary"
                        target="_blank"
                        href={project.codePenLink}
                        style={{
                          display: project.codePenLink ? "inline" : "none"
                        }}
                        children="CodePen"
                      />

                      <Button
                        className={classes.cardButton}
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
    </Fragment>
  );
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Projects);
