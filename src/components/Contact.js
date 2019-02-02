import React, { Component } from 'react'
import { Grid, withStyles } from '@material-ui/core'
import './Contact.css'

const styles = {

}

class Contact extends Component {

  render() {
    const {classes} = this.props;
    return (
      <div>

          <Grid container spacing={24} className="contact-body">
            
            <Grid item xs={6} sm={20} className="gridItems">
             x2
             </Grid>
 
             <Grid item xs={6} className="gridItems">
              x1
             </Grid>
            
          </Grid>

      </div>
    )
  }
}

export default withStyles(styles)(Contact);