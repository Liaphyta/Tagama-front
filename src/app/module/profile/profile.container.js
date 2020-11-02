import React from 'react';
import { connect } from 'react-redux'
import { action } from '../../../index';

import { Grid, Paper, Table, TableCell, TableRow, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, TextField, DialogActions, Button, } from "@material-ui/core";
import { fetchMainUserData } from './profile.actions';
import { handleLogout, hasAnyRole, refreshToken } from './../../shared/app.properties';
import Redirect from 'react-router-dom/Redirect';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {resetPasswordUser} from './../users/users.repo';

class ProfileContainer extends React.Component {

    loading = false;

    unauthorized = false;

    state = {
        newPassword: '',
        confirmPassword: '',
        error: false,
    }

    componentDidMount() {
        this.props.fetchMainUserData();

        this.unauthorized = !hasAnyRole('ROLE_ADMINISTRATION');

        let refreshTime = new Date();
        refreshTime.setSeconds(refreshTime.getSeconds() + 1800);

        if (!localStorage.getItem('idm') || !localStorage.getItem('me')) {
            handleLogout()
        } else if (localStorage.getItem('idm') && new Date(JSON.parse(localStorage.getItem('idm')).expires_at) < new Date()) {
            handleLogout()
        } else if (localStorage.getItem('idm') && new Date(JSON.parse(localStorage.getItem('idm')).expires_at) < refreshTime) {
            refreshToken()
        }
    }

    handleUserFormChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.newPassword === this.state.confirmPassword) {
            let u = this.props.singleuser;
            u['password']= this.state.newPassword;
            resetPasswordUser({user:u}).then( res =>{
                handleLogout();
                window.location.replace("/login")
            })
        }
        else {
            this.setState({
                error: true
            })
        }
    };

    render() {
        if (this.props.singleuser) {

        }
        return (
            <div className="my-profile">
                {localStorage.getItem('idm') && localStorage.getItem('me') && this.unauthorized &&
                    <Redirect to="/app/error/unauthorized" />
                }
                <h3 style={{ marginLeft: 30 + 'px' }}>MY PROFILE</h3>
                <Paper style={{ marginLeft: 30 + "px", marginRight: 30 + 'px', padding: 10 + 'px' }}>

                    <Grid>
                        <Grid xs={6}>
                            {this.props.singleuser &&
                            <div>
                                <Table>
                                    <TableRow>
                                        <TableCell>Username</TableCell>
                                        <TableCell>{this.props.singleuser.username}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>First name</TableCell>
                                        <TableCell>{this.props.singleuser.name}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Last name</TableCell>
                                        <TableCell>{this.props.singleuser.surname}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>E-mail</TableCell>
                                        <TableCell>{this.props.singleuser.email}</TableCell>
                                    </TableRow>

                                </Table>
                                <br/><br/>
                                <ExpansionPanel >
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography >Reset Password</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                    <form onSubmit={this.handleSubmit} autoComplete="off" maxWidth="md" className="dialog-form-container" >
                                    <TextField
                                        id="last-name"
                                        fullWidth={true}
                                        onChange={this.handleUserFormChange('newPassword')}
                                        label="New Password:"
                                        value={this.state.newPassword ? this.state.newPassword : ''}
                                        margin="normal"
                                        type="password"
                                        required
                                    />
                                    <TextField
                                        id="email-name"
                                        fullWidth={true}
                                        label="Confirm Password"
                                        onChange={this.handleUserFormChange('confirmPassword')}
                                        value={this.state.confirmPassword ? this.state.confirmPassword : ''}
                                        margin="normal"
                                        type="password"
                                        error={this.state.error}
                                        helperText={this.state.error ? 'Must match the previous entry' : ''}
                                        required
                                    />
                                    <DialogActions>
                                        <Button type="submit" color="primary" variant="contained">
                                            Reset
                                        </Button>
                                    </DialogActions>
                                </form>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                </div>
                            }
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        singleuser: state.profileReducer.singleuser
    }
};

export default connect(mapStateToProps, ({
    fetchMainUserData
}))(ProfileContainer);

