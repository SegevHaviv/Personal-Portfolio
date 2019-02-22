import React, { useState,Suspense,lazy, Section } from "react";
import PropTypes from "prop-types";
import { withStyles, CssBaseline } from "@material-ui/core";
import background_image from "./assets/images/backgroundimage.jpg";

const NavBar = lazy(() => import("./components/NavBar.js"));
const Contact = lazy(() => import("./components/Contact"));
const Projects = lazy(() => import("./components/Projects"));
const Resume = lazy(() => import("./components/Resume"));
const LandingPage = lazy(() => import("./components/LandingPage"));

// import NavBar from "./components/NavBar.js";
// import Contact from "./components/Contact";
// import Projects from "./components/Projects";
// import Resume from "./components/Resume";
// import LandingPage from "./components/LandingPage";
// import background_image from "./assets/images/backgroundimage.jpg";

const styles = theme => ({
  root: {
    position:"fixed",
    width:"100%",
    height:"100%",
    background: `url(${background_image})`,
    backgroundSize: "100% 100%",
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
        <Suspense fallback={<div>Loading NavBar...</div>}>
        <NavBar
          onSelect={handleCategorySelected}
          onTitleSelected={() => handleTitleSelected(0)}
        />
        </Suspense>

        <div className={classes.toolbar} />
        <Suspense fallback={<div>Loading Content...</div>}>

          {toggleSelectedTab(navBarIndex)}
          </Suspense>

      </div>
    );
  }

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
