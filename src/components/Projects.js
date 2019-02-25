/* eslint-disable no-dupe-keys */
import React, { Fragment,useState } from "react";
import { projectsData, categoryEnum } from "../store";
import { Tabs, Tab, withStyles , Typography , Card , CardMedia , CardContent , Button , Grid,
        Fade,  Divider } from "@material-ui/core";


const styles = theme => ({
  root: {

  },
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
  tabsNavigator:{
    color:"white",
    [theme.breakpoints.down('xs')] : {
      // position:'absolute',
      // bottom: 0,
      // right:0,
      // left:0,
      // background: "#232526",  /* fallback for old browsers */
      // background: "-webkit-linear-gradient(to right, #414345, #232526)",  /* Chrome 10-25, Safari 5.1-6 */
      // background: "linear-gradient(to top, #000000, #232526)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  
     },
  },
  gridContainer: {
    width:"80%",
    margin:"auto"
  },
  
});

function Projects(props){
  const [value,setValue] = useState(categoryEnum.REACT);
  const { classes } = props;
  const specificData = projectsData.filter(x => x.category === value);

  function handleChange(event, value){
    setValue(value);
  };

  return (
    <Fragment>
      <Fade in timeout={750}>
        <div className={classes.root}>

          {/* Mapping the categories to tabs */}
          <Tabs 
            centered 
            value={value} 
            className={classes.tabsNavigator}
            onChange={handleChange}
            style={{zIndex: 1}}
            >

              {
              Object.entries(categoryEnum).map(([key, value]) => 
              <Tab key={key} label={value} value={value} 
              style={{textTransform:'capitalize',fontSize:"1em"}}/>)
              }

            </Tabs>

          
            <Grid container className={classes.gridContainer}spacing={24} justify="center" alignItems="center">
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
                          children="GitHub"
                        />

                        <Button
                          className={classes.cardButton}
                          color="primary"
                          target="_blank"
                          href={project.codePenLink}
                          style={{display : project.codePenLink ? "inline" : "none"}}
                          children="CodePen"
                        />
                          
                        <Button
                          className={classes.cardButton}
                          color="primary"
                          target="_blank"                     
                          href={project.liveDemo}
                          style={{display : project.liveDemo ? "inline" : "none"}}
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
export default withStyles(styles)(Projects);
