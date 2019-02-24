/* eslint-disable no-dupe-keys */
import React, { Fragment, PureComponent } from "react";
import { withStyles, CssBaseline, Fade,Tooltip } from "@material-ui/core";


const styles = theme => ({
  root: {
    textAlign: "center",
    height:"100%",
    margin: theme.spacing.unit * 2,
  },
  resumeDocument: {
    width: "100%",
    height: "100%"
  },
  documentIcon: {
    fontSize: 45,
    color: "white",
    margin: theme.spacing.unit * 2
  },
  resumeDocumentContainer:{
    textAlign:'center',
    width: "55%",
    height: "75%",
    margin:"auto"
  }
});

class Resume extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <CssBaseline />
        <Fade in timeout={750}>
          <div className={classes.root}>

          <div className={classes.resumeDocumentContainer}>
          <iframe 
          className={classes.resumeDocument}
          title="resumeWord"
          src="https://docs.google.com/document/d/e/2PACX-1vTQXowFxP6P5j14ksjD4zrhtDzlPWtpf-qAlj1m1I1t7KLwbuUKhFbF1xlA3vcc0AEzvcdDGgMmnnP2/pub?embedded=true"/>
          </div>

            <div>

            <Tooltip TransitionComponent={Fade}
                      disableFocusListener={true}  title={"Google Drive"}
                      > 
              <a
                href="https://drive.google.com/file/d/1mG3tYOZOryvGzzWiTKaWgEjtnjCtmifT/view?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
                >
                <i className={`fab fa-google-drive ${classes.documentIcon}`}></i>
              </a>
              </Tooltip>
              <Tooltip TransitionComponent={Fade}
                      disableFocusListener={true}  title={"One Drive"}
                      > 
              <a
                href="https://1drv.ms/w/s!AruKrT6K1gHDgZB3kOXKMSkfVGqmag"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className={`fas fa-cloud  ${classes.documentIcon}`}></i>
              </a>
              </Tooltip>
            </div>
          </div>
        </Fade>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Resume);
