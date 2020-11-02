import React from 'react';
import {fetchAllSystemSettingsProps, updateSystemSettingsProp} from './settings.repo';
import {FormControlLabel, Grid, Paper, Switch, Table, TableCell, TableRow, TextField} from '@material-ui/core';
import {connect} from 'react-redux';
import {authorize, handleLogout, hasRole, refreshToken} from '../../shared/app.properties';
import Redirect from 'react-router/Redirect';

class SystemSettingsContainer extends React.Component {

    unauthorized = false;

    state = {
        settingsMap: undefined
    }

    componentWillMount() {
        this.unauthorized = !hasRole('ROLE_ADMINISTRATION');

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

    componentDidMount(){
        this.fetchAllSettingsProps();
    }

    fetchAllSettingsProps = () => {
        fetchAllSystemSettingsProps({}).then(res => {

            this.setState({
                asd: 'asd'
            });

            var tmpmap = [];
            for (var i = 0; i < res.data.length; i++) {
                tmpmap[res.data[i].key] = res.data[i].value;
            }
            this.setState({
                settingsMap: tmpmap
            });

        }).catch(err => {

        });
    }

    handleExportEncryptionChange = (event, MAIN_SEARCH_ZIP_ENCRYPT_ENABLED) => {
        var encBool = 'false';
        if (MAIN_SEARCH_ZIP_ENCRYPT_ENABLED) {
            encBool = 'true';   
        }
        var tmpmap = this.state.settingsMap;
        updateSystemSettingsProp({ key: 'MAIN_SEARCH_ZIP_ENCRYPT_ENABLED', val: encBool })
            .then(res => {
                tmpmap.MAIN_SEARCH_ZIP_ENCRYPT_ENABLED = res.data.value;
                this.setState({
                    settingsMap: tmpmap
                })
            }).catch(err => {

        });
    }

    handleSmsNotificationsEnabledChange = (event, SMS_NOTIFICATIONS_ENABLED) => {
        var encBool = 'false';
        if (SMS_NOTIFICATIONS_ENABLED) {
            encBool = 'true';
        }
        var tmpmap = this.state.settingsMap;
        updateSystemSettingsProp({key: 'SMS_NOTIFICATIONS_ENABLED', val: encBool})
            .then(res => {
                tmpmap.SMS_NOTIFICATIONS_ENABLED = res.data.value;
                this.setState({
                    settingsMap: tmpmap
                })
            }).catch(err => {

        });
    }

    handleEmailNotificationsEnabledChange = (event, EMAIL_NOTIFICATIONS_ENABLED) => {
        var encBool = 'false';
        if (EMAIL_NOTIFICATIONS_ENABLED) {
            encBool = 'true';
        }
        var tmpmap = this.state.settingsMap;
        updateSystemSettingsProp({key: 'EMAIL_NOTIFICATIONS_ENABLED', val: encBool})
            .then(res => {
                tmpmap.EMAIL_NOTIFICATIONS_ENABLED = res.data.value;
                this.setState({
                    settingsMap: tmpmap
                })
            }).catch(err => {

        });
    }

    handleFormChange = name => event => {
        let tmpmap = this.state.settingsMap;
        updateSystemSettingsProp({key: name, val: event.target.value})
            .then(res => {
                tmpmap[name] = res.data.value;
                this.setState({
                    settingsMap: tmpmap
                })
            }).catch(err => {

        });
    }

    render() {
        return (
            <div className="my-profile">

                {localStorage.getItem('idm') && localStorage.getItem('me') && this.unauthorized &&
                <Redirect to="/app/error/unauthorized"/>
                }

                <Grid>
                    <Grid xs={6}>
                        <h3 style={{ marginLeft: 30 + 'px' }}>SYSTEM SETTINGS</h3>

                        <Paper style={{ marginLeft: 30 + "px", marginRight: 30 + 'px', padding: 10 + 'px' }}>

                            {this.state.settingsMap &&
                                <Table>
                                    <TableRow>
                                        <TableCell>Main search export encrypt enabled</TableCell>
                                        <TableCell>
                                            <FormControlLabel
                                                control={
                                                    <Switch
                                                        checked={this.state.settingsMap &&
                                                            this.state.settingsMap.MAIN_SEARCH_ZIP_ENCRYPT_ENABLED &&
                                                            this.state.settingsMap.MAIN_SEARCH_ZIP_ENCRYPT_ENABLED == "true"}
                                                        onChange={this.handleExportEncryptionChange}
                                                        value="MAIN_SEARCH_ZIP_ENCRYPT_ENABLED"
                                                        color="primary"
                                                    />
                                                }
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>SMS notifications enabled</TableCell>
                                        <TableCell>
                                            <FormControlLabel
                                                control={
                                                    <Switch
                                                        checked={this.state.settingsMap &&
                                                        this.state.settingsMap.SMS_NOTIFICATIONS_ENABLED &&
                                                        this.state.settingsMap.SMS_NOTIFICATIONS_ENABLED == "true"}
                                                        onChange={this.handleSmsNotificationsEnabledChange}
                                                        value="SMS_NOTIFICATIONS_ENABLED"
                                                        color="primary"
                                                    />
                                                }
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Email notifications enabled</TableCell>
                                        <TableCell>
                                            <FormControlLabel
                                                control={
                                                    <Switch
                                                        checked={this.state.settingsMap &&
                                                        this.state.settingsMap.EMAIL_NOTIFICATIONS_ENABLED &&
                                                        this.state.settingsMap.EMAIL_NOTIFICATIONS_ENABLED == "true"}
                                                        onChange={this.handleEmailNotificationsEnabledChange}
                                                        value="EMAIL_NOTIFICATIONS_ENABLED"
                                                        color="primary"
                                                    />
                                                }
                                            />
                                        </TableCell>
                                    </TableRow>
                                </Table>
                            }
                        </Paper>
                    </Grid>


                    <Grid xs={6}>
                        <h3 style={{marginLeft: 30 + 'px'}}>SMPP PARAMETERS</h3>
                        <Paper style={{marginLeft: 30 + "px", marginRight: 30 + 'px', padding: 10 + 'px'}}>
                            {this.state.settingsMap &&
                            <Table>
                                <TableRow>
                                    <TableCell>SMPP Host</TableCell>
                                    <TableCell>
                                        <TextField
                                            id="smppHost"
                                            onChange={this.handleFormChange('SMPP_HOST')}
                                            fullWidth={true}
                                            value={this.state.settingsMap.SMPP_HOST ? this.state.settingsMap.SMPP_HOST : ''}
                                            margin="normal"
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>SMPP Port</TableCell>
                                    <TableCell>
                                        <TextField
                                            id="smppPort"
                                            onChange={this.handleFormChange('SMPP_PORT')}
                                            fullWidth={true}
                                            value={this.state.settingsMap.SMPP_PORT ? this.state.settingsMap.SMPP_PORT : ''}
                                            margin="normal"
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>SMPP Username</TableCell>
                                    <TableCell>
                                        <TextField
                                            id="smppUsername"
                                            onChange={this.handleFormChange('SMPP_USERNAME')}
                                            fullWidth={true}
                                            value={this.state.settingsMap.SMPP_USERNAME ? this.state.settingsMap.SMPP_USERNAME : ''}
                                            margin="normal"
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>SMPP Password</TableCell>
                                    <TableCell>
                                        <TextField
                                            id="smppPassword"
                                            onChange={this.handleFormChange('SMPP_PASSWORD')}
                                            fullWidth={true}
                                            value={this.state.settingsMap.SMPP_PASSWORD ? this.state.settingsMap.SMPP_PASSWORD : ''}
                                            margin="normal"
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>MSISDN</TableCell>
                                    <TableCell>
                                        <TextField
                                            id="smppMsisdn"
                                            onChange={this.handleFormChange('SMPP_MSISDN')}
                                            fullWidth={true}
                                            value={this.state.settingsMap.SMPP_MSISDN ? this.state.settingsMap.SMPP_MSISDN : ''}
                                            margin="normal"
                                        />
                                    </TableCell>
                                </TableRow>
                            </Table>
                            }
                        </Paper>
                    </Grid>

                    <Grid xs={6}>
                        <h3 style={{marginLeft: 30 + 'px'}}>SMTP PARAMETERS</h3>
                        <Paper style={{marginLeft: 30 + "px", marginRight: 30 + 'px', padding: 10 + 'px'}}>
                            {this.state.settingsMap &&
                            <div>
                                <Table>
                                    <TableRow>
                                        <TableCell>SMTP Host</TableCell>
                                        <TableCell>
                                            <TextField
                                                id="smtpHost"
                                                onChange={this.handleFormChange('SMTP_HOST')}
                                                fullWidth={true}
                                                value={this.state.settingsMap.SMTP_HOST ? this.state.settingsMap.SMTP_HOST : ''}
                                                margin="normal"
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>SMTP Port</TableCell>
                                        <TableCell>
                                            <TextField
                                                id="smtpPort"
                                                onChange={this.handleFormChange('SMTP_PORT')}
                                                fullWidth={true}
                                                value={this.state.settingsMap.SMTP_PORT ? this.state.settingsMap.SMTP_PORT : ''}
                                                margin="normal"
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>SMTP Username</TableCell>
                                        <TableCell>
                                            <TextField
                                                id="smtpUsername"
                                                onChange={this.handleFormChange('SMTP_USERNAME')}
                                                fullWidth={true}
                                                value={this.state.settingsMap.SMTP_USERNAME ? this.state.settingsMap.SMTP_USERNAME : ''}
                                                margin="normal"
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>SMTP Password</TableCell>
                                        <TableCell>
                                            <TextField
                                                id="smtpPassword"
                                                onChange={this.handleFormChange('SMTP_PASSWORD')}
                                                fullWidth={true}
                                                value={this.state.settingsMap.SMTP_PASSWORD ? this.state.settingsMap.SMTP_PASSWORD : ''}
                                                margin="normal"
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>SMTP Sender address</TableCell>
                                        <TableCell>
                                            <TextField
                                                id="smtpSender"
                                                onChange={this.handleFormChange('SMTP_SENDER_ADDRESS')}
                                                fullWidth={true}
                                                value={this.state.settingsMap.SMTP_SENDER_ADDRESS ? this.state.settingsMap.SMTP_SENDER_ADDRESS : ''}
                                                margin="normal"
                                            />
                                        </TableCell>
                                    </TableRow>
                                </Table>
                            </div>
                            }
                        </Paper>
                        <br/><br/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        allusersdata: undefined
    }
};

export default connect(mapStateToProps, ({

}))(SystemSettingsContainer);


