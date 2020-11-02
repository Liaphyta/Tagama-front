import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Redirect from 'react-router-dom/Redirect'
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import {getAuthorizationHeader, handleLogout, SERVER_API_URL} from '../../shared/app.properties';
import Snackbar from '@material-ui/core/Snackbar';
import MySnackbarContent from '../../shared/SnackbarContentWrapper';
import CircularProgress from '@material-ui/core/CircularProgress';


export default class LoginContainer extends React.Component {

    username;
    password;

    state = {
        username: '',
        password: '',
        shakeClass: '',
        redirect: false,
        snackbarOpen: false,
        snackbarMessage: '',
        fieldUsernameError: false,
        messageVariant: 'error',
        fieldPasswordError: false
    }

    componentWillMount() {
        let refreshTime = new Date();
        refreshTime.setSeconds(refreshTime.getSeconds() + 1800);

        // if (!localStorage.getItem('idm') || !localStorage.getItem('me')) {
        //     handleLogout()
        // } else if (localStorage.getItem('idm') && new Date(JSON.parse(localStorage.getItem('idm')).expires_at) < new Date()) {
        //     handleLogout()
        // }
    }

    componentDidMount(){
        var idm = localStorage.getItem('idm');
        idm = JSON.parse(localStorage.getItem('idm'));
        if(idm && idm.access_token !== undefined){
            // refreshToken();
            if(idm.expires_at <= 300){

            }
        }
    }

    enterPressed(event) {
        var code = event.keyCode || event.which;
        if(code === 13) { //13 is the enter keycode
           this.authenticate();
        } 
    }

    authenticate = () => {
        this.setState({shakeClass: '', snackbarOpen: false, loading: true});
        let username = this.state.username;
        let password = this.state.password;


        let goterr = false;
        if(username == undefined || username == '' || username == ' '){
            this.setState({fieldUsernameError: true, 
                snackbarOpen: true,
                loading: false,
                snackbarMessage: 'Some required fields are empty!'});
            goterr = true;
        }else{
            this.setState({fieldUsernameError: false});
        }
        if(password == undefined || password == '' || password == ''){
            this.setState({fieldPasswordError: true, 
                snackbarOpen: true,
                loading: false,
                snackbarMessage: 'Some required fields are empty!'});
            goterr = true;
        }else{
            this.setState({fieldPasswordError: false});
        }
        if(goterr) return;

        axios({
            url: SERVER_API_URL + '/oauth/token?username='
            + username 
            + '&password='
            + password
            + '&grant_type=password',
            method: 'POST',
            headers: {
                'Authorization' : getAuthorizationHeader()
            }
        }).then(res => {
            this.handleAuthSuccess(res);
        }).catch(err => {
            this.handleAuthError(err);
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
        // expires_at_date.setSeconds(expires_at_date.getSeconds() + res.data.expires_in);
        expires_at_date = new Date(expires_at_date.getTime() + res.data.expires_in * 1000);
        res.data.expires_at = expires_at_date;


        res.data.username = this.state.username;
        localStorage.setItem('idm', JSON.stringify(res.data));
        
        axios({
            url: SERVER_API_URL + '/users/me?access_token='
            + res.data.access_token, 
            method: 'GET',
            headers: {
                'Authorization' : 'Basic bXktdHJ1c3RlZC1jbGllbnQ6c2VjcmV0'
            }
        }).then(response => {
            localStorage.setItem('me', JSON.stringify(response.data));
            this.setState({
                logedin: true
            })
        }).catch(err => {


        })
        
        
    }


    handleAuthError = err => {


        this.setState({
            snackbarOpen: true,
            messageVariant: 'error',
            snackbarMessage: 'Wrong credentials',
            shakeClass: 'apply-shake',
            loading: false
        })
    }

    handleCloseSnackbar = () =>{
        this.setState({snackbarOpen: false});
    }

    handleFormChange = name => event => {
        let val = event.target.value;
        this.setState({
         [name]: val
        });
     }; 

  render() {
    return (
        <div>
            {
                localStorage.getItem('idm') && <Redirect to='/app/'/>
            }
            {
                this.logedin && <Redirect to='/app/'/>
            }
            <Card className={this.state.shakeClass} style={{width: 600+"px", padding: 15+"px", marginLeft: "auto", marginRight: "auto", marginTop: 10+"%"}}>
            
            <Typography variant="h5" style={{marginBottom: 20+"px", textAlign: 'center'}} >Log in</Typography>
            <form>
            <TextField
                id="input-username"
                onKeyPress={this.enterPressed.bind(this)}
                label="Username"
                fullWidth={true}
                onChange={this.handleFormChange('username')}
                error={this.state.fieldUsernameError}
                value={this.state.username}
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <AccountCircle />
                    </InputAdornment>
                ),
                }}
            />

            <br/><br/>
                <TextField
                id="input-password"
                onKeyPress={this.enterPressed.bind(this)}
                label="Password"
                type="password"
                onChange={this.handleFormChange('password')}
                value={this.state.password}
                error={this.state.fieldPasswordError}
                fullWidth={true}
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <Lock />
                    </InputAdornment>
                ),
                }}
            />
            <br/><br/><br/>
            <Button onClick={this.authenticate} color="primary" fullWidth={true} variant="contained">
                    {!this.state.loading && 'Login' }
                    {this.state.loading && <CircularProgress style={{color: 'white'}} size={24} />}
            </Button>
            </form>
            </Card>
            

          <Snackbar
            width={600+'px'}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            onClose={this.handleCloseSnackbar}
            open={this.state.snackbarOpen}
            variant={this.state.messageVariant}
            autoHideDuration={6000}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
          >
            <MySnackbarContent
              onClose={this.handleCloseSnackbar}
              variant={this.state.messageVariant}
              message={this.state.snackbarMessage}
            />
          </Snackbar>
        </div>
    );
  }
}
