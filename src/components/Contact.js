import React from "react";

import { withStyles , Grid , Avatar , Typography , Divider , Fade } from "@material-ui/core";
import avatar from "../assets/images/avatarImg.png";
import { useTheme } from '@material-ui/styles';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

const styles = theme => ({
  root: {  
    marginTop:35, 
  },
  contactGridContainer: {
    background: "white",
    border: "2px solid grey",
    margin: "auto",

    [theme.breakpoints.up('sm')]:{
      width: "75%",
      height: "70%",
    },
    [theme.breakpoints.down('xs')]:{
      width: "95%",
      height: "70%",
    }
  },
  contactGridOtem: {
    marginTop: 20,
  },
  avatar: {
    [theme.breakpoints.down('xs')]: {
      width: "35vw",
      height: "25vh",
      marginBottom: 20,
    },
    [theme.breakpoints.up('sm')]: {
      width: "35%",
      height: "35%",
    },
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
    [theme.breakpoints.up('sm')]:{
      margin: 25,
    },
    [theme.breakpoints.down('xs')]:{
      width: "100%",
      marginTop: 50,
      fontSize: 30,
      textAlign:'center',
      
    }
  }
});

function Contact(props) {
  const { classes } = props;
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('xs'));
  
  return (
     
      <div className={classes.root}>
        <Fade in timeout={750}>
          <Grid container spacing={24} className={classes.contactGridContainer}>
            <Grid item xs={6} className={classes.contactGridItem}>
               <Typography gutterBottom variant={smallScreen ? "h5" : "h2"} align='center' style={{ fontFamily: "Raleway" }}>
                 Segev Haviv
               </Typography>

               <Avatar className={classes.avatar} src={avatar} alt="avatar" />

               <Typography className={classes.descrpitionText} variant={smallScreen ? "subtitle1" : "h6"} align='center'>
                  Junior full stack developer with great passion for code,
                  especially for web technologies, autodidact with high
                  motivitaion to learn and get my hands dirty.
               </Typography>
            </Grid>

            <Grid item xs={6} className={classes.contactGridItem}>

              <Typography gutterBottom variant={smallScreen ? "h5" : "h2"} align='center' style={{ fontFamily: "Raleway"}}>
                Contact Me
              </Typography>

              <Divider style={{ backgroundColor: "black" }} />
              
              <Typography  variant={smallScreen ? "subtitle1" : "h4"}
               className={classes.contactDetails} >
                <i className={`fa fa-phone-square ${classes.contactIcon}`} />
                +972-527363711
              </Typography>
              
              <Typography  variant={smallScreen ? "body2" : "h4"} 
              className={classes.contactDetails} align="center" inline={true}>
                <i  className={`fa fa-envelope ${classes.contactIcon}`} />
                
               segevhaviv@gmail.com
              </Typography>

 
              <Typography  variant={smallScreen ? "subtitle1" : "h4"}
               className={classes.contactDetails} align="center" inline={true}>
                <i className={`fa fa-home ${classes.contactIcon}`}/>
                {smallScreen ? <div>Holon, Israel</div> : <span>Holon, Israel</span>}
              </Typography>

             </Grid>
          </Grid>
        </Fade>
      </div>
  );
}

export default withStyles(styles)(Contact);
