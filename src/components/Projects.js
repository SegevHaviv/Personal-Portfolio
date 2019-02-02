import React, { Component } from 'react'
import { AppBar , Tabs, Tab, withStyles, CssBaseline } from '@material-ui/core';

const styles = theme => ({
  root: {
    marginBottom: 85
  },
  appBar: {
    color: 'black',
    flexGrow: 1,
    alignItems: 'center'
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
      <React.Fragment>
        <CssBaseline/>
          <div className={classes.root}>
            <AppBar position="static" color="inherit" className = {classes.appBar}> 
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label="JavaScript" />
              <Tab label="React" />
              <Tab label="MongoDB" />
            </Tabs>
          </AppBar>
        </div>
        <h1 style={{ fontSize: 150 }}>Projects</h1>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(Projects);