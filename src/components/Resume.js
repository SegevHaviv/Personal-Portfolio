import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'

const styles = {
  root: {
    margin: 230,
  },
}

class Resume extends Component {

  render() {
    const {classes} = this.props;
    return (
       <div className = {classes.root}>
            <h1 style={{ fontSize: 150 }}>Resume</h1>
      </div>
    )
  }
}


export default withStyles(styles)(Resume);