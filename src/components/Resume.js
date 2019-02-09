/* eslint-disable no-dupe-keys */
import React, { Fragment, PureComponent } from "react";
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

class Resume extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <CssBaseline />
        <Fade in timeout={1500}>
          <div className={classes.root}>
            <iframe
              src="https://docs.google.com/document/d/e/2PACX-1vSlm2QG8aa28foHAHuKRZgs1XRF1w_Bah0MNX9bCIt7wnk1jFL58hT5XIOCmEfw79YdkWYYgk1jRah8/pub?embedded=true"
              className={classes.resumeDocument}
              title="resume"
            />
            <div>
              <a
                href="https://docs.google.com/document/d/1TM0TZX7Gci7OTbQoTH-yB-EPTQ6k3qAEcB159q62n4c/edit?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i
                  className="fab fa-google-drive"
                  style={{ fontSize: 45, color: "white", margin: 15 }}
                >
                  {" "}
                </i>
              </a>
              <a
                href="https://onedrive.live.com/view.aspx?resid=C301D68A3EAD8ABB!18535&ithint=file%2cdocx&app=Word&authkey=!AFGP5nW3aRPeM_8"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i
                  className="fas fa-cloud"
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
