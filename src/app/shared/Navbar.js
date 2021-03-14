import React from 'react';
import logo from '../../Logo/tagama-png.png';
import { Link } from "react-router-dom";
import { Badge, Button, CssBaseline, IconButton, List, ListItem, Menu, MenuItem, Paper, Select, TextField, } from "@material-ui/core";
import { AppBar, Toolbar, Typography, } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
export function Navbar(props) {
    const theme = createMuiTheme({
        typography: {
            fontFamily: [
                'Chilanka',
                'cursive',
            ].join(','),
        },
    });
    const languageOptions = [
        { key: "English", text: "English", value: "EN" },
        { key: "Macedonian", text: "Macedonian", value: "MKD" }
    ];
    const options = [
        'MKD',
        'ENG',
    ];

 
        return (
            <div>
                <CssBaseline />
                <AppBar position="fixed" style={{ backgroundColor: '#f2f2f2' }}>
                    <Toolbar>
                        <img src={logo} style={{ height: "5%", width: "5%" }} />
                        <div>
                            <IconButton >
                                <Badge
                                    badgeContent={0}
                                    color="#FF7619">
                                </Badge>
                                <a href="https://www.facebook.com/tagamatanja">
                                    <FacebookIcon />
                                </a>
                            </IconButton>
                            <IconButton

                            >
                                <a href="https://www.instagram.com/tagamatanja">
                                    <InstagramIcon />
                                </a>
                            </IconButton>
                            <IconButton

                            >
                                <a href={"mailto:" + "tagama4@yahoo.com"}>
                                    <MailOutlineIcon />
                                </a>
                            </IconButton>
                        </div>
                        <div style={{ position: "absolute", right: 25 + 'px' }} className="pull-right">
                    <div >
                        <ThemeProvider theme={theme}>

                            {console.log(theme)}
                            <List style={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
                                <ListItem>
                                    <Link to="/">
                                        <Typography variant="h6" style={{ textAlign: 'center', color: "#434b56" }} ><b>Home</b></Typography></Link>
                                </ListItem>
                                <ListItem>
                                    <Link to="/">
                                        <Typography noWrap variant="h6" style={{ textAlign: 'center', color: "#434b56" }}><b>About us</b></Typography></Link>
                                </ListItem>
                                <ListItem>
                                    <Link to="/">
                                        <Typography variant="h6" style={{ textAlign: 'center', color: "#434b56" }} ><b>Contact</b></Typography></Link>
                                </ListItem>
                            </List>
                        </ThemeProvider>
                    </div>
                </div>
                    </Toolbar>
                   
                </AppBar>
                
            </div>
        )
}