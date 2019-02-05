import React, { Component, Fragment } from 'react'
import {projectsData} from '../store'
import reactAvatar from '../assets/images/reactAvatar.png'
import dotNetAvatar from '../assets/images/DotNetAvatar.png'
import javascriptAvatar from '../assets/images/javascriptAvatar.png'
import MongoDBAvatar from '../assets/images/MongoDBAvatar.png'

import { 
  AppBar,
  Tabs, 
  Tab,
  withStyles,
  Typography,
  Card, 
  CardActionArea,
  CardActions, 
  CardMedia,
  CardContent,
  Button,
  Grid,
  Fade,
  Divider,
} 
from '@material-ui/core';


const styles = theme => ({
  root:{  
    position: 'fixed',
    overflowY: 'scroll',
    width: '100%',
    height: '100%',
    background: '#085078',  /* fallback for old browsers */
    background: '-webkit-linear-gradient(to right, #85D8CE, #085078)',  /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear-gradient(to right, #85D8CE, #085078)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    textAlign: 'center',
    overflowX:' hidden',
  },

  card: {
    maxWidth: 300,
    margin: 'auto auto auto 1vh',
  },

  media: {
    height: 180,
  },
  description: {
    
  },
  cardButton: {
    fontWeight: 'bold' ,
    marginRight: 5, 
    marginLeft: 5,
    fontFamily: 'Montserrat',
  }
  
});

class Projects extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: 0,
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  getSpecificProjectsData = (value,projectsData) => {
    const projectSpecificData = projectsData;
    if(value === 0){
      return projectSpecificData.filter(x => x.category === 'react');
      
    }
    else if(value === 1){
      return projectSpecificData.filter(x => x.category === 'javascript')
       
    }
    else if(value === 2){
      return projectSpecificData.filter(x => x.category === '.net')
    }
    else {
      return projectSpecificData.filter(x => x.category === 'mongodb')
    }
  }

  toggleImageByCategory = (category) => {
    if(category === 'react')
      return reactAvatar;
    else if(category === 'javascript')
      return javascriptAvatar;
    else if(category === '.net')
      return dotNetAvatar;
    else
      return MongoDBAvatar;
    
  }
  
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const specificData  = this.getSpecificProjectsData(value,projectsData);

    return (
      <Fade in timeout={1500}>
          <div className={classes.root}>
            <AppBar position="static" color="inherit" className = {classes.appBar}> 
            <Tabs centered value={value} onChange={this.handleChange}>
              <Tab label="React" />
              <Tab label="JavaScript"/>
              <Tab label=".NET"/>
              <Tab label="MongoDB" />
            </Tabs>
          </AppBar>
          
          <Grid container spacing={16} style={{margin: '1vh auto auto auto'}} justify= 'center'>
   
          <Fragment>
          
            {
              
              specificData.map(project => {
              return (
                <Grid item xs= {3} key={project.title} >
                <Card className={classes.card}>
                  
                    <CardMedia
                      className={classes.media}
                      image={this.toggleImageByCategory(project.category)}
                      title={project.title}
                    />
                    <CardContent className={classes.media}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {project.title}
                      </Typography>
                      {/* Problem : Text may overflow. */}
                      <Typography className={classes.description} component="p">
                        {project.description}
                      </Typography>
                    </CardContent>
                  
                  <Divider/>
                  
                  <Button className={classes.cardButton} color="primary" target='_blank' href ={project.gitHubLink}>
                    GitHub
                  </Button>

                  <Button className={classes.cardButton} color="primary" target='_blank' href ={project.codePenLink}>
                    CodePen
                  </Button>
                  
                  <Button className={classes.cardButton} color="primary" target='_blank' href ={project.liveDemo}>
                    LiveDemo
                  </Button>  
                </Card>   
                </Grid>
         
              );
              
            })
           
            }  
            
          </Fragment>
        
          </Grid>
         
        
        </div>
        </Fade>
    );
  }
}
export default withStyles(styles)(Projects);