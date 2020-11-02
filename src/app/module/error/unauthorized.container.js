import React from 'react';
import {connect} from 'react-redux'
import { handleLogout, refreshToken } from '../../shared/app.properties';
import { Grid, Typography } from '@material-ui/core';

class UnauthorizedContainer extends React.Component {

    // componentWillMount() {

    //     let refreshTime = new Date();
    //     refreshTime.setSeconds(refreshTime.getSeconds() + 1800);

    //     if (!localStorage.getItem('idm') || !localStorage.getItem('me')) {
    //         handleLogout()
    //     } else if (localStorage.getItem('idm') && new Date(JSON.parse(localStorage.getItem('idm')).expires_at) < new Date()) {
    //         handleLogout()
    //     } else if (localStorage.getItem('idm') && new Date(JSON.parse(localStorage.getItem('idm')).expires_at) < refreshTime) {
    //         refreshToken()
    //     }
    // }


    render() {

        return (

            <div>
            <Grid style={{marginTop:'10%'}}>
            <Typography style={{zoom:1.3}} align="center" component="h2" variant="display4" gutterBottom>401</Typography>
            <Typography align="center" component="h2" variant="display3" gutterBottom>Unauthorized Access!</Typography>
            <Typography align="center" component="h2" variant="display1" gutterBottom>Oops! You don't have permission to access this page.</Typography>
            </Grid>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {}
};

export default connect(mapStateToProps, ({}))(UnauthorizedContainer);