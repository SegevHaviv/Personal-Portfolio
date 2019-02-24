import React from "react";

import { withStyles , Grid , Avatar , Typography , Divider , Fade } from "@material-ui/core";
import avatar from "../assets/images/avatarImg.png";

const styles = theme => ({
  root: {  
    marginTop:35, 
    height:"100%"
  },
  contactGridContainer: {
    background: "white",
    border: "2px solid grey",
    margin: "auto",

    [theme.breakpoints.up('sm')]:{
      width: "75%",
      height: "70%",
    },
    // [theme.breakpoints.down('xs')]:{
    //   width: "75%",
    //   height: "70%",
    // }
  },
  contactGridOtem: {
    marginTop: 20,
  },
  avatar: {
    width: "35%",
    height: "35%",
    margin: "auto"
  },
  descrpitionText: {
    marginTop: 35,
    fontFamily: "Oxygen"
  },
  contactDetails: {
    fontFamily: "Oxygen"
  },
  contactIcon: {
    margin: 25,
    marginRight: 40,
  }
});

function Contact(props) {
  const { classes } = props;
  
  return (
     
      <div className={classes.root}>
        <Fade in timeout={750}>
          <Grid container spacing={24} className={classes.contactGridContainer}>
            <Grid item xs={6} className={classes.contactGridOtem}>
               <Typography gutterBottom variant="h2" align='center' style={{ fontFamily: "Raleway" }}>
                 Segev Haviv
               </Typography>

               <Avatar className={classes.avatar} src={avatar} alt="avatar" />

               <Typography className={classes.descrpitionText} variant="h6" align='center'>
                  Junior full stack developer with great passion for code,
                  especially for web technologies, autodidact with high
                  motivitaion to learn and get my hands dirty.
               </Typography>
            </Grid>

            <Grid item xs={6} className={classes.contactGridOtem}>

              <Typography gutterBottom variant="h2" align='center' style={{ fontFamily: "Raleway"}}>
                Contact Me
              </Typography>

              <Divider style={{ backgroundColor: "black" }} />
              
              
              <Typography variant="h4" className={classes.contactDetails}>
                <i  className={`fa fa-phone-square ${classes.contactIcon}`} />
                +972-527363711
              </Typography>
             
              <div style={{display:'inline-block'}}>
              <Typography variant="h4" className={classes.contactDetails} inline={true} style={{width:"100%"}}>
                <i  className={`fa fa-envelope ${classes.contactIcon}`}/>
                segevhaviv@gmail.com
              </Typography>
              </div>
              <Typography variant="h4" className={classes.contactDetails}>
                <i className={`fa fa-home ${classes.contactIcon}`}/>
                Holon, Israel
              </Typography>
             </Grid>
          </Grid>
        </Fade>
      </div>
  );
}

export default withStyles(styles)(Contact);
