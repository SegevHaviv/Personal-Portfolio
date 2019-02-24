import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles, CssBaseline,Fade } from "@material-ui/core";
import background_image from "./assets/images/backgroundimage.jpg";

import NavBar from "./components/NavBar.js";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import LandingPage from "./components/LandingPage";

const styles = theme => ({
  '@global': {
    'html,body,#root': {
      height: '100%'
    }
  },
  root: {
    width:"100%",
    height:"100%",
    background: `url(${background_image})`,
    backgroundSize: "cover",
  },
  toolbar: theme.mixins.toolbar,
});

function App(props) {
  const [navBarIndex,setnavBarIndex] = useState(0);
  const { classes } = props;


  function handleCategorySelected(index) {
    setnavBarIndex(index);
  };

  function handleTitleSelected(){
    setnavBarIndex(0);
  };

  function toggleSelectedTab(navBarIndex) {
    switch (navBarIndex) {
      case 0:
        return <LandingPage />;
      case 1:
        return <Projects />;
      case 2:
        return <Resume />;
      case 3:
        return <Contact />;
      default:
        return <LandingPage />;
    }
  };

    return (
      <div className = {classes.root}>
        <CssBaseline/>

        <NavBar
        onSelect={handleCategorySelected} index={navBarIndex}
        onTitleSelected={() => handleTitleSelected(0)}
        />

        <div className={classes.toolbar} />
   
        <Fade in timeout={750}>
        {toggleSelectedTab(navBarIndex)}
        </Fade>

      </div>
    );
  }

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
