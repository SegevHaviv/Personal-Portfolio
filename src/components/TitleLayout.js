import React, { Component } from 'react'
import './TitleLayout.css';
import avatar from '../assets/images/avatarImg.png'
import { Typography, withStyles, Tooltip } from '@material-ui/core'

//TODO : Fixing the unclickable buttons while on NavBar while scrolling through the title layout.

const styles = {
  root:{
    marginTop: 90,
    marginBottom: 150,
  },
  skills: {
    margin: 20,
  },
  socialLinks: {
   fontSize: 50,  
   color: 'inherit',
   textDecoration: 'none',
   margin: 30,
   marginTop: 50,
  },
};

// Optional: Adding a scrolling down arrow.

class TitleLayout extends Component {

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
          <div className = "banner">
            <div> 
               <img id="avatar" src={avatar} alt="avatar"/>
              <Typography color='inherit' align='cetner' variant="h4">Hi, I'm Segev</Typography>    
              <h1><strong>A Full Stack Developer</strong></h1>

              <hr className = "bannerHr" />
              <Typography className = {classes.skills} color='inherit' variant="h6"> HTML & CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB </Typography>
            </div>

            <div>
                {/* Linkedin */}
                <Tooltip title="LinkedIn">
                <a target='blank' href="https://www.linkedin.com/in/segev-haviv-a8429912a/"  className={classes.socialLinks}>
                <i class="fab fa-linkedin"></i>
                </a>
                </Tooltip>
                
                {/* Github */}
                <Tooltip title="GitHub">
                <a target='blank' href="https://github.com/SegevHaviv" className = {classes.socialLinks}> 
                    <i className ="fab fa-github"></i>
                </a>
                </Tooltip>

                {/* FFC */}
                <Tooltip title="freeCodeCamp">
                <a target='blank' href="#x"className={classes.socialLinks}>
                <i class="fab fa-free-code-camp"></i>
                </a>
                </Tooltip>

                
            </div>
            
          </div>
      </div>
    );
  }
}

export default withStyles(styles)(TitleLayout);