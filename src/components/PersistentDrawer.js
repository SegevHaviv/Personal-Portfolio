import React,{Fragment} from 'react';
import PropTypes from 'prop-types';


import { Toolbar , List , ListItem , IconButton , ListItemIcon , Drawer, withStyles, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import HomeIcon from '@material-ui/icons/Home';
import ProjectIcon from '@material-ui/icons/Work';
import ResumeIcon from '@material-ui/icons/Description';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 300;

const styles = theme => ({
  root: {
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    flexShrink: 0,
  },

  drawerPaper: {
    width: drawerWidth,
    background: "#0a0b0c",
    color: "white",
  },
 
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class PersistentDrawerLeft extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleSelectedDrawerTab = (index) => {
    this.handleDrawerClose();
    this.props.onSelectedDrawerTab(index);
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <Fragment>
          <Toolbar>
            <IconButton color="inherit" aria-label="Open drawer" onClick={this.handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
          </Toolbar>

          <ClickAwayListener onClickAway={this.handleDrawerClose}>
        <Drawer className={classes.drawer} variant="persistent" anchor="right" open={open}
        
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div >
            <IconButton onClick={this.handleDrawerClose}   style={{color:"white"}} >
              { <ChevronRightIcon />}
            </IconButton>
          </div>

          <List style={{marginTop:50}}> 
            {['Home Page', 'My Work', 'Resume','Contact'].map((text, index) => (
              <ListItem 
               button key={text}
               onClick={()=>this.handleSelectedDrawerTab(index)}
               style={{color:"white",marginTop:20,fontSize:20,opacity: this.props.index === index? 1 : 0.5}} > 
                    <ListItemIcon   style={{color:"white",fontSize:20}} >
                    {
                        index === 0 ? <HomeIcon /> 
                        : index === 1 ? <ProjectIcon/> 
                        : index === 2 ? <ResumeIcon/> 
                        : <MailIcon />
                    }
                    </ListItemIcon>
                <Typography variant="subtitle1" style={{color:"white"}}>{text}</Typography>
              </ListItem>              
            ))}
            
          </List>
        </Drawer>
        </ClickAwayListener>
      </Fragment>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);