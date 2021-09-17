import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import { Grid, Button, LinearProgress, Snackbar, Container, CssBaseline, Avatar, Typography, SnackbarContent } from '@material-ui/core';
import { connect } from 'react-redux'
import { dispatchAction } from '.';
import { TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { SERVER_URL } from './config/config';
import HomeContainer from './app/module/pages/home.container';
import aboutUsContainer from './app/module/pages/aboutUs.container';
import contactContainer from './app/module/pages/contact.container';
import SimpleDialog from './app/module/pages/SimpleDialog';
import faqContainer from './app/module/pages/faq.container';



export function hasRole(roles) {
    var role = roles.split(",")
    console.log(role);
    var currentRoles = localStorage.getItem('me') && JSON.parse(localStorage.getItem('me')).authorities;
    console.log(currentRoles);
    var hasRole = false;
    if (currentRoles != null) {
        for (var i = 0; i < role.length; i++) {

            for (var j = 0; j < currentRoles.length; j++) {
                if (role[i] == currentRoles[j].authority) {
                    hasRole = true;
                }
            }

            if (hasRole == false) {
                return false;
            }
            if (i != role.length - 1) {
                hasRole = false;
            }
        }
    }
    return hasRole;
}

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            displayProgressBar: false,
            snackbarOpen: false,
            loggedIn: false,
            settingsClicked: false,
        }
    }
    getAuthorizationHeader() {
        return "Basic bXktdHJ1c3RlZC1jbGllbnQ6c2VjcmV0";
    }

    componentDidMount() {

    }


    handleSettings = () => {
        this.setState({
            settingsClicked: true
        })
    }


    componentWillMount() {
        if (localStorage.getItem("isLoggedIn")) {
            this.setState({
                loggedIn: true
            })
        }
        console.log('Login check')
    }

    login = () => {
        axios({
            url: SERVER_URL + '/oauth/token?username='
                + this.state.username
                + '&password='
                + this.state.password
                + '&grant_type=password',
            method: 'POST',
            headers: {
                'Authorization': this.getAuthorizationHeader()
            }
        }).then(res => {
            this.handleAuthSuccess(res);
            console.log(res);
            this.setState({
                loggedIn: true
            })
        }).catch(err => {
            this.handleAuthError(err);
            this.setState({
                loggedIn: false
            })
        })

        // localStorage.setItem("isLoggedIn", true)
    }
    logout = () => {
        this.setState({
            loggedIn: false
        })
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("idm");
        localStorage.removeItem("me");
    }
    handleFormInput = name => event => {
        this.setState({
            [name]: event.target.value
        });
    }

    handleAuthError = err => {


        this.setState({
            snackbarOpen: true,
            messageVariant: 'error',
            snackbarMessage: 'Wrong credentials!',
            shakeClass: 'apply-shake',
            loading: false
        })
    }
    handleAuthSuccess = res => {

        this.setState({
            messageVariant: 'success',
            snackbarMessage: '',
            shakeClass: '',
            snackbarOpen: false,
            loading: false
        });
        var expires_at_date = new Date();
        expires_at_date = new Date(expires_at_date.getTime() + res.data.expires_in * 1000);
        res.data.expires_at = expires_at_date;


        res.data.username = this.state.username;
        localStorage.setItem('idm', JSON.stringify(res.data));
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("username", this.state.username);

        axios({
            url: SERVER_URL + '/users/me?access_token='
                + res.data.access_token,
            method: 'GET',
            headers: {
                'Authorization': 'Basic bXktdHJ1c3RlZC1jbGllbnQ6c2VjcmV0'
            }
        }).then(response => {
            localStorage.setItem('me', JSON.stringify(response.data));
            localStorage.setItem("isLoggedIn", true);
            this.setState({
                logedin: true
            })
        }).catch(err => {


        })

    }

    // handleCloseSnackbar = () => {
    //     dispatchAction({
    //         type: MAIN_SNACKBAR_HIDE,
    //         payload: {}
    //     })
    // }

    render() {
        return (
            <Router>

                {
                    <div className="App">

                        {/* <Route render={() => <Redirect to="/"/>} /> */}
                        <Route path="/" exact component={HomeContainer} />
                        <Route path="/about_us" component={aboutUsContainer} />
                        <Route path="/contact" component={contactContainer} />
                        <Route path="/contact/done" component={SimpleDialog} />
                        <Route path="/faq" component={faqContainer} />
                    </div>
                }
            </Router>
        )
    }

}

const mapStateToProps = state => {
    return {
        displayProgressBar: state.mainReducer.displayProgressBar,
        snackbarOpen: state.mainReducer.snackbarOpen,
        snackbarMessage: state.mainReducer.snackbarMessage,
        snackbarType: state.mainReducer.snackbarType
    }
};

export default connect(mapStateToProps, ({

}))(App);