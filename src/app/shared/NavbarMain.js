import React from 'react';
import {Link} from "react-router-dom";

import {Badge, Button, IconButton, List, ListItem, Menu, MenuItem, Paper, Select, TextField,} from "@material-ui/core";
import {hasRole} from './app.properties';
import { AppBar, Toolbar, Typography, } from "@material-ui/core";
import logo from '../../Logo/tagama-png.png';
import textLogo from '../../Logo/tagama-text.png';
import { createMuiTheme,ThemeProvider, withStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';




export function NavbarMain(props) {
      
      const [anchorEl, setAnchorEl] = React.useState(null);
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
          };
        
          const handleClose = () => {
            setAnchorEl(null);
          };

      const theme = createMuiTheme({
            typography: {
              fontFamily: [
                'Chilanka',
                'cursive',
              ].join(','),
            },});
            const languageOptions = [
                  { key: "English", text: "English", value: "EN" },
                  { key: "Macedonian", text: "Macedonian", value: "MKD" }
               ];
            const options = [
                  'MKD',
                  'ENG',
                ];
                const ITEM_HEIGHT = 10;
      

    return (
        <div className="header">

            {/* {hasRole("ROLE_ADMINISTRATION") &&
            <div style={{display: 'inline'}}>
                <Link to="/app/audit/" className="pull-right"
                      style={{marginLeft: 30 + "px", fontWeight: "bold"}}><Button color="inherit"
                                                                                  className="pull-right"><strong>Audit</strong></Button></Link>

                <Link to="/app/privileges/" className="pull-right"
                      style={{marginLeft: 30 + "px", fontWeight: "bold"}}><Button color="inherit"
                                                                                  className="pull-right"><strong>Privileges</strong></Button></Link>

                <Link to="/app/groups/" className="pull-right"
                      style={{marginLeft: 30 + "px", fontWeight: "bold"}}><Button color="inherit"
                                                                                  className="pull-right"><strong>Groups</strong></Button></Link>

                <Link to="/app/users/" className="pull-right"
                      style={{marginLeft: 30 + "px", fontWeight: "bold"}}><Button color="inherit"
                                                                                   className="pull-right"><strong>Users</strong></Button></Link>
                 
            
            </div>  }
            {(hasRole("ROLE_USER") || hasRole("ROLE_ADMINISTRATION")) &&
            <div style={{display: 'inline'}}>
                <Link to="/app/folders" className="pull-right"
                      style={{marginLeft: 30 + "px", fontWeight: "bold"}}><Button color="inherit"
                                                                                  className="pull-right"><strong>Folders</strong></Button></Link>
                <Link to="/app/scans" className="pull-right"
                      style={{marginLeft: 30 + "px", fontWeight: "bold"}}><Button color="inherit"
                                                                                  className="pull-right"><strong>Scans</strong></Button></Link>
                <Link to="/app/reports" className="pull-right"
                      style={{marginLeft: 30 + "px", fontWeight: "bold"}}><Button color="inherit"
                                                                                  className="pull-right"><strong>Reports</strong></Button></Link>


            </div>
            } */}
{/* style={{position:"absolute", right:25+'px'}} className="pull-right" */}
<div >

{/* You need this when you will handle with logout stuff */}
{/* {
  !localStorage.getItem('idm') && !localStorage.getItem('me') && <Redirect to='/login' />
} */}

{/* color="inherit"  */}
    <IconButton >
        <Badge
            badgeContent={0}
            color="#FF7619">
            </Badge>
            <a href="https://www.facebook.com/tagamatanja">
            <FacebookIcon/>
            </a>
          </IconButton>
          <IconButton
            
          >
            <a href="https://www.instagram.com/tagamatanja">
          <InstagramIcon/>
          </a>
          </IconButton>
          <IconButton
            
          >
            <a href={"mailto:" + "tagama4@yahoo.com"}>
          <MailOutlineIcon/>
          </a>
          </IconButton>          
        </div>
            
                        {/* <img src={textLogo} style={{height:"7%",width: "7%"}}/>
                        <div style={{marginLeft:'75%'}}>
                        <ThemeProvider theme={theme}>
                        <List style={{display: 'flex',flexDirection: 'row',padding: 0}}>
                        
                              <ListItem>
                              <Link to="/">
                              <Typography variant="h6" style={{ textAlign: 'center',color:"gray"}} ><b>Home</b></Typography></Link>   
                              </ListItem>
                              <ListItem>
                              <Link to="/">
                              <Typography noWrap variant="h6" style={{ textAlign: 'center',color:"gray"}}><b>About us</b></Typography></Link>   
                              </ListItem>
                              <ListItem>
                              <Link to="/">
                              <Typography variant="h6" style={{ textAlign: 'center',color:"gray"}} ><b>Contact</b></Typography></Link>   
                              </ListItem>
                              <ListItem>
                        
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
                              </ListItem>
                              

                        </List>
                        </ThemeProvider>

                        
                        </div> */}
            </div>
     
  );
}

NavbarMain.propTypes = {
};

