import React from 'react';
import {connect} from 'react-redux'
import { handleLogout, refreshToken } from '../../shared/app.properties';

class AppContainer extends React.Component {


    //I need this when i have login system
    
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

    componentDidMount() {
    }


    render() {

        return (

            <div>


            </div>

        );
    }
}

const mapStateToProps = state => {
    return {}
};

export default connect(mapStateToProps, ({}))(AppContainer);

