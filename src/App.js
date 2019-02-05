/* eslint-disable no-dupe-keys */
import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core'

import './App.css';


import NavBar from './components/NavBar.js';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';
import LandingPage from './components/LandingPage';


const styles = {
  container: {
    background: '#085078',  /* fallback for old browsers */
    background: '-webkit-linear-gradient(to right, #85D8CE, #085078)',  /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear-gradient(to right, #85D8CE, #085078)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
}

class App extends Component {

  constructor(props){
    const titleIndex = 3;
    super(props);
    this.state = {
        value: titleIndex,
    }
  }

  

  handleCategorySelected = (index) => {
    this.setState({
      value: index,
    })
  }

  handleTitleSelected = () => {
    this.setState({
      value: this.titleIndex,
    })
  }

  toggleSelectedTab= (tabValue) => {
    switch(tabValue){
        case 0:
          return <Projects/>
        case 1:
          return <Resume/>
        case 2:
          return <Contact/>
        case 3:
          return <LandingPage/>
        default : 
          return <LandingPage/>
    }
  }


  render() {
    const {classes} = this.props;
    const tabValue = this.state.value;

    return (
      <Fragment>
        <div className={classes.container}>
          <NavBar
            tabValue={tabValue} 
            onSelect = {this.handleCategorySelected} 
            onTitleSelected={this.handleTitleSelected}
          />

        {this.toggleSelectedTab(tabValue)}
        </div>
      </Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
