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
      fontSize: 50,  
      textDecoration: 'none',
      marginRight: 30,
      marginLeft: 30,
      color: 'inherit',
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
      <Fade  in={true} timeout={1500}>
        <div className = {classes.banner}>

          <Avatar className={classes.avatar} src={avatar} alt="avatar"/>
          
          <Typography color='inherit' variant="h4">Hi, I'm Segev</Typography>  
          
          <h1><strong>A Full Stack Developer</strong></h1>

          <hr variant='middle' className={classes.bannerHr} />

          <Typography style={{margin: 5}} color='inherit' variant="h6"> 
            HTML & CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB 
          </Typography>

          <div className={classes.socialLinks}>
           {
             landingPageIcons.map(x => {
             return (
              <Tooltip key={x.title} TransitionComponent={Fade} disableFocusListener={true}  title={x.title}>
                <IconButton style={{fontSize:50}} color='inherit' target='blank' href={x.link} className={x.icon}/>
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