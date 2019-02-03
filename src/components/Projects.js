import React, { Component } from 'react'
import { AppBar , Tabs, Tab, withStyles } from '@material-ui/core';

const styles = theme => ({
    root:{
      textAlign: 'center',
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
  
  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
          <div className={classes.root}>
            <AppBar position="static" color="inherit" className = {classes.appBar}> 
            <Tabs centered value={value} onChange={this.handleChange}>
              <Tab label="JavaScript" />
              <Tab label="React"/>
              <Tab label=".NET"/>
              <Tab label="MongoDB" />
            </Tabs>
          </AppBar>
          <h1 style={{ fontSize: 150 }}>Projects</h1>

        </div>
   
    );
  }
}
export default withStyles(styles)(Projects);