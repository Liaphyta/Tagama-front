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
import MediaQuery from 'react-responsive';
export function Navbar(props) {
    const theme = createMuiTheme({
        typography: {
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
        },
    });

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="container">
            <CssBaseline />
            <AppBar position="fixed" style={{ backgroundColor: '#ebeee7' }}>
                <Toolbar>
                    <MediaQuery minDeviceWidth={1224}>

                        <img src={logo} style={{ height: "5%", width: "5%" }} />
                    </MediaQuery>
                    <MediaQuery maxDeviceWidth={1224}>

                        <img src={logo} style={{ height: "10%", width: "10%" }} />
                    </MediaQuery>

                    <div>
                        <IconButton >
                            <Badge
                                badgeContent={0}
                                color="#FF7619">
                            </Badge>
                            <a href="https://www.facebook.com/tagamatanja" style={{ color: 'inherit' }}>
                                <FacebookIcon />
                            </a>
                        </IconButton>
                        <IconButton

                        >
                            <a href="https://www.instagram.com/tagamatanja" style={{ color: 'inherit' }}>
                                <InstagramIcon />
                            </a>
                        </IconButton>
                        <IconButton

                        >
                            <a href={"mailto:" + "tagama4@yahoo.com"} style={{ color: 'inherit' }}>
                                <MailOutlineIcon />
                            </a>
                        </IconButton>
                        <a href="tel:+38970332752" style={{ fontSize: '120%', color: '#6c6d6a' }}>+38970332752</a>
                    </div>
                    <MediaQuery minDeviceWidth={1224}>
                        <div style={{ position: "absolute", right: '1%' }} className="pull-right">
                            <div >
                                <ThemeProvider theme={theme}>
                                    <List className="listFont" style={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
                                        <ListItem>
                                            <Link to="/">
                                                <Button>
                                                    <Typography variant="h6" style={{ textAlign: 'center', color: "#4a4a49" }} ><b>Home</b></Typography>
                                                </Button>
                                            </Link>

                                        </ListItem>
                                        <ListItem>
                                            <Link to="/about_us">
                                                <Button>
                                                    <Typography noWrap variant="h6" style={{ textAlign: 'center', color: "#4a4a49" }}><b>About us</b></Typography></Button></Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link to="/contact">
                                                <Button>
                                                    <Typography variant="h6" style={{ textAlign: 'center', color: "#4a4a49" }} ><b>Contact</b></Typography>
                                                </Button></Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link to="/faq">
                                                <Button>
                                                    <Typography variant="h6" style={{ textAlign: 'center', color: "#4a4a49" }} ><b>FAQ</b></Typography>
                                                </Button></Link>
                                        </ListItem>
                                    </List>
                                </ThemeProvider>
                            </div>
                        </div>
                    </MediaQuery>
                    <MediaQuery maxDeviceWidth={1224}>
                        <div style={{ float: 'right' }}>
                            <IconButton
                                aria-label="more"
                                id="long-button"
                                aria-controls="long-menu"
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={handleClick}
                            >
                                <MoreVertIcon />
                            </IconButton>
                            <Menu
                                id="long-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'long-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem>
                                    <Link to="/">
                                        <Button>
                                            <Typography variant="h6" style={{ textAlign: 'center', color: "#4a4a49" }} ><b>Home</b></Typography>
                                        </Button>
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/about_us">
                                        <Button>
                                            <Typography noWrap variant="h6" style={{ textAlign: 'center', color: "#4a4a49" }}><b>About us</b></Typography></Button></Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/contact">
                                        <Button>
                                            <Typography variant="h6" style={{ textAlign: 'center', color: "#4a4a49" }} ><b>Contact</b></Typography>
                                        </Button></Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/faq">
                                        <Button>
                                            <Typography variant="h6" style={{ textAlign: 'center', color: "#4a4a49" }} ><b>FAQ</b></Typography>
                                        </Button></Link>
                                </MenuItem>
                            </Menu>
                        </div>
                    </MediaQuery>

                </Toolbar>

            </AppBar>

        </div>

    )
}