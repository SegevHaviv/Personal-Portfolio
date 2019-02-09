/* eslint-disable no-dupe-keys */
import React, { Component, Fragment } from "react";
import { withStyles, CssBaseline, Fade } from "@material-ui/core";

const styles = {
  root: {
    position: "fixed",
    width: "100%",
    height: "100%",
    background: "#085078" /* fallback for old browsers */,
    background:
      "-webkit-linear-gradient(to right, #85D8CE, #085078)" /* Chrome 10-25, Safari 5.1-6 */,
    background:
      "linear-gradient(to right, #85D8CE, #085078)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
    textAlign: "center",
          whiteSpace: "noWrap"
  },
  resumeDocument: {
    width: "70%",
    marginTop: 30,
    height: "75%"
  }
};

class Resume extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <CssBaseline />
        <Fade in timeout={1500}>
          <div className={classes.root}>
            <iframe
              src="https://docs.google.com/document/d/e/2PACX-1vTNxFWb2QdTG_zLbASA299pHk7kBpqk_5bV1kboAvkujHogsGlrBrNn1lDrwRk1iTE7r0uKF29cJ430/pub?embedded=true"
              className={classes.resumeDocument}
              title="resume"
            />
            <div>
              <a
                href="../assets/documents/Segev-Haviv-Resume.docx"
                download="Segev-Haviv-Resume.docx"
              >
                <i
                  class="fas fa-download"
                  style={{ fontSize: 45, color: "white", margin: 15 }}
                >
                  {" "}
                </i>
              </a>

              <a
                href="https://docs.google.com/document/d/1_RZJDD512Dka7KEs0rACnVPOW7Drq4Kbtnz0YN0qWOQ/edit?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i
                  class="fab fa-google-drive"
                  style={{ fontSize: 45, color: "white", margin: 15 }}
                >
                  {" "}
                </i>
              </a>
            </div>
          </div>
        </Fade>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Resume);
