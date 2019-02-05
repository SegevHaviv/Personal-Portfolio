/* eslint-disable no-dupe-keys */
import React, { Component, Fragment } from 'react'
import { withStyles, CssBaseline, Fade } from '@material-ui/core'
import './Resume.css'
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
}

class Resume extends Component {

  render() {
    const {classes} = this.props;
    return (
      <Fragment>
      <CssBaseline/>
      <Fade in timeout={1500}>
       <div className={classes.root}>
       <iframe src="https://docs.google.com/document/d/e/2PACX-1vSlm2QG8aa28foHAHuKRZgs1XRF1w_Bah0MNX9bCIt7wnk1jFL58hT5XIOCmEfw79YdkWYYgk1jRah8/pub?embedded=true" 
       className='resumeDocument'
       title='resume'
       ></iframe> 
       
       </div>
       </Fade>
      </Fragment>
    )
  }
}


export default withStyles(styles)(Resume);