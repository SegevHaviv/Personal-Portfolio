import React, { Fragment, PureComponent } from "react";
import { projectsData, categoryEnum } from "../store";

import {
  AppBar,
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
  Divider,
} from "@material-ui/core";

const styles = theme => ({
  root: {
    overflowX: "hidden",
    width:"100%",
    height:"100%"
  },
  toolbar: theme.mixins.toolbar,
  card: {
    maxWidth: 300
  },

  media: {
    height: 180,
    textAlign: "center",
    justifyContent: "center"
  },

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
      value: categoryEnum.REACT // Initial Category.
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const specificData = projectsData.filter(x => x.category === value);

    return (
      <Fragment>
        
        <Fade in timeout={1500}>
          <div className={classes.root}>
            <AppBar
              style={{background:"none",top: 'auto'}}
            >
              <Tabs centered value={value} onChange={this.handleChange}>
                {Object.entries(categoryEnum).map(([key, value]) => <Tab key={key} label={key} value={value}/>)}
              </Tabs>
            </AppBar>
            <div className={classes.toolbar} />


            <div
              style={{
                width: "80%",
                margin: "auto",
                marginTop: 30,
                marginBottom: 80
              }}
            >
              <Grid container spacing={24} justify="center" alignItems="center">
                {specificData.map(project => {
                  return (
                    <Grid item xs={4} key={project.title} style={{minWidth: 300}}>
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
                            component="p"
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
                            style={{display : project.gitHubLink ? "inline" : "none"}}
                          >
                            GitHub
                          </Button>

                          <Button
                            className={classes.cardButton}
                            color="primary"
                            target="_blank"
                            href={project.codePenLink}
                            style={{display : project.codePenLink ? "inline" : "none"}}
                          >
                            CodePen
                          </Button>

                          <Button
                            className={classes.cardButton}
                            color="primary"
                            target="_blank"                     
                            href={project.liveDemo}
                            style={{display : project.liveDemo ? "inline" : "none"}}

                          >
                            LiveDemo
                          </Button>
                        </div>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </div>
          </div>
        </Fade>
      </Fragment>
    );
  }
}
export default withStyles(styles)(Projects);
