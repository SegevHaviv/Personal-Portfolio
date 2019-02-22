/* eslint-disable no-dupe-keys */
import React, { Fragment, PureComponent } from "react";
import { withStyles, CssBaseline, Fade } from "@material-ui/core";


const styles = {
  root: {
    textAlign: "center",
    width:"100%",
    height:"100%",
    marginTop:15  
  },
  resumeDocument: {
    width: "70%",
    height: "75%"
  },
  documentContainer: {
    background:`red`,
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
          <div className="iFrameContainer">
          <iframe className={classes.resumeDocument} title="resumeWord" src="https://docs.google.com/document/d/e/2PACX-1vTQXowFxP6P5j14ksjD4zrhtDzlPWtpf-qAlj1m1I1t7KLwbuUKhFbF1xlA3vcc0AEzvcdDGgMmnnP2/pub?embedded=true"></iframe>

          
          </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1mG3tYOZOryvGzzWiTKaWgEjtnjCtmifT/view?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-google-drive" style={{ fontSize: 45, color: "white", margin: 15 }}></i>
              </a>
              <a
                href="https://1drv.ms/w/s!AruKrT6K1gHDgZB3kOXKMSkfVGqmag"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fas fa-cloud" style={{ fontSize: 45, color: "white", margin: 15 }}></i>
              </a>
            </div>
          </div>
        </Fade>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Resume);
