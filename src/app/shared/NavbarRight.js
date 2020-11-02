import React from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {Badge, createMuiTheme, IconButton, List, ListItem, Menu, MenuItem,} from "@material-ui/core";
import Redirect from 'react-router/Redirect';
import {dispatchAction} from '../..';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/styles';


class NavbarRight extends React.Component {

  state = {
    userMenuIsOpen: false,
      anchorEl: null,
      taskNotifications: false
  };

  componentDidMount(){
  }
 
       

  handleUserMenuOpen = event => {
    this.setState({
      userMenuIsOpen: true,
      anchorEl: event.currentTarget
    })
  }

  
  handleUserMenuClose = () => {
    this.setState({
      userMenuIsOpen: false,
      anchorEl: null
    });
  }

    handleTaskNotificationsOpen = event => {
        this.setState({
            taskNotifications: true,
            anchorEl: event.currentTarget,

        })
    }

    handleTaskNotificationsClose = () => {
        this.setState({
            taskNotifications: false,
            anchorEl: null
        });
    }
  
  
  handleLogout = () => {
    dispatchAction({type: "USER_LOGOUT", payload: undefined});
    localStorage.removeItem('idm');
    localStorage.removeItem('me');
    this.setState({});

  }
  theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Chilanka',
        'cursive',
      ].join(','),
    },});
 

  render(){
    let refreshTime = new Date();
      refreshTime.setSeconds(refreshTime.getSeconds() + 1800);
  return (
    
      
    <div style={{position:"absolute", right:25+'px'}} className="pull-right">

    {/* You need this when you will handle with logout stuff */}
    {/* {
      !localStorage.getItem('idm') && !localStorage.getItem('me') && <Redirect to='/login' />
    } */}

          <div >
                        <ThemeProvider theme={this.theme}>
                          
                          {console.log(this.theme)}
                        <List style={{display: 'flex',flexDirection: 'row',padding: 0}}>
                        
                              <ListItem>
                              <Link to="/">
                              <Typography variant="h6" style={{ textAlign: 'center',color:"#434b56"}} ><b>Home</b></Typography></Link>   
                              </ListItem>
                              <ListItem>
                              <Link to="/">
                              <Typography noWrap variant="h6" style={{ textAlign: 'center',color:"#434b56"}}><b>About us</b></Typography></Link>   
                              </ListItem>
                              <ListItem>
                              <Link to="/">
                              <Typography variant="h6" style={{ textAlign: 'center',color:"#434b56"}} ><b>Contact</b></Typography></Link>   
                              </ListItem>
                              {/* <ListItem>
                        
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'MKD'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
                              </ListItem> */}
                              

                        </List>
                        </ThemeProvider>

                        
                        </div>
            </div>

        // <IconButton color="inherit" >
        //     <Badge
        //         badgeContent={0}
        //         color="#FF7619">
        //         </Badge>
        //         <a href="https://www.facebook.com/tagamatanja">
        //         <FacebookIcon/>
        //         </a>
        //       </IconButton>
        //       <IconButton
        //         color="inherit"
        //       >
        //         <a href="https://www.instagram.com/tagamatanja">
        //       <InstagramIcon/>
        //       </a>
        //       </IconButton>
        //       <IconButton
        //         color="inherit"
        //       >
        //         <a href={"mailto:" + "tagama4@yahoo.com"}>
        //       <MailOutlineIcon/>
        //       </a>
        //       </IconButton>          
        //     </div>

  )}
}

const mapStateToProps = state => {
    return {
    }
};

export default connect(mapStateToProps, ({
}))(NavbarRight);












