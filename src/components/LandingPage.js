/*eslint no-dupe-keys: 0*/

import React, { Component,Fragment } from 'react'
import avatar from '../assets/images/avatarImg.png'
import { Typography, withStyles, Tooltip, Fade, CssBaseline, IconButton, Avatar  } from '@material-ui/core'
import '../App.css'
import { landingPageIcons } from '../store'

const styles = {
    root:{  
      position: 'fixed',
      width: '100%',
      height: '100%',
      background: '#085078',  /* fallback for old browsers */
      background: '-webkit-linear-gradient(to right, #85D8CE, #085078)',  /* Chrome 10-25, Safari 5.1-6 */
      background: 'linear-gradient(to right, #85D8CE, #085078)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      textAlign: 'center',
    },

    socialLinks: {
      margin:'auto',
    },
    banner:{
      textAlign: 'center',
      padding: 10,
      background: 'black',
      color: 'white',
      width: '55%',
      margin: '8vh auto auto auto',
      borderRadius: 40,
    },
    bannerHr:{
      width: '70%',
      color: 'white',
    },
    avatar:{
      width: '25%',
      height: '100%',
      margin:'auto',
    }
};



class LandingPage extends Component {

render() {
  const {classes} = this.props;
  return (
    <Fragment>
      <CssBaseline/>
      <div className={classes.root}>
        <Fade in timeout={{enter: 1500}}>
        <div className = {classes.banner}>

          <Avatar 
          className={classes.avatar} 
          src={avatar} 
          alt="avatar"/>
          
          <Typography 
          gutterBottom 
          color='inherit' 
          variant="h4">
          Hi, I'm Segev
          </Typography>  
          
          <Typography
          noWrap 
          gutterBottom 
          color='inherit' 
          variant="h3">
          A Full Stack Developer
          </Typography>  

          <hr variant='middle' className={classes.bannerHr} />

          <Typography gutterBottom color='inherit' variant="h6"> 
            HTML & CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB 
          </Typography>

          <div className={classes.socialLinks}>
           {
             landingPageIcons.map(dataIcon => {
             return (
              <Tooltip 
              key={dataIcon.title} 
              TransitionComponent={Fade} 
              disableFocusListener={true}  
              title={dataIcon.title}
              >
                <IconButton
                style={{fontSize:50,marginRight: 25}} 
                color='inherit'
                target='blank' 
                href={dataIcon.link}
                className={dataIcon.icon}/>
              </Tooltip> 
             );
           })}

          </div>
        </div>
       </Fade>
      </div>
    </Fragment>
    );
  }
}

export default withStyles(styles)(LandingPage);