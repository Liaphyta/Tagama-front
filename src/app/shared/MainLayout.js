import React from 'react';
import { connect } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link, Route } from "react-router-dom";
import Users from '../module/users/users.container';
import Groups from '../module/groups/groups.container';
import Privileges from '../module/privileges/privileges.container';
import AddPrivilegeToGroupContainer from '../module/privileges/manage.privileges/addgroup.dialog.privileges';
import AddPrivilegeToUserContainer from '../module/privileges/manage.privileges/adduser.dialog.privileges';
import CreateUserContainer from '../module/users/create.users/create.users.container';
import UpdateUserContainer from '../module/users/update.users/update.users.container';
import DetailsUserContainer from '../module/users/details.users/details.users.container';
import DeleteUserContainer from '../module/users/delete.users/delete.users.container';
import { NavbarMain } from './NavbarMain';
import NavbarRight from './NavbarRight';
import { SidebarMenu } from './SidebarMenu';
import { AppBar, Toolbar, Typography, } from "@material-ui/core";
import Snackbar from '@material-ui/core/Snackbar';
import MySnackbarContent from './SnackbarContentWrapper';
import { CLEAR_NOTIFICATIONS } from './Main.Reducer';
import Slide from '@material-ui/core/Slide';
import LinearProgress from '@material-ui/core/LinearProgress';
import createGroupsContainer from '../module/groups/create.groups/create.groups.container';
import DeleteGroupsContainer from '../module/groups/delete.groups/delete.groups.container';
import UpdateGroupContainer from '../module/groups/update.groups/update.groups.container';
import DetailsGroupsContainer from '../module/groups/details.groups/details.groups.container';
import AddUserToGroupContainer from '../module/groups/manage.groups/adduser.dialog.groups';
import ProfileContainer from '../module/profile/profile.container';
import FoldersContainer from '../module/Folders/folders.container';
import AddPathFolderContainer from '../module/Folders/addPathfolder.container';
import { authorize } from './app.properties';
import dashboardContainer from '../module/dashboard/dashboard.container';
import AuditContainer from './../module/audit/audit.container';

import AppContainer from './../module/app/app.container';
import UnauthorizedContainer from '../module/error/unauthorized.container';
import ResetPasswordUserContainer from '../module/users/update.users/resetPassword.users.container';
import SystemSettingsContainer from '../module/settings/system_settings.container';
import ScansContainer from '../scans/scans.container';
import ReportsContainer from '../module/reports/reports.container';
import ReportsIndividualContainer from '../module/reports/reportsIndividual.container';
import MonthlyReportContainer from '../module/reports/monthlyreport.container';
import ScansMissingFilesContainer from '../scans/scansMissingFiles.container';
import HomeContainer from '../module/pages/home.container';
import logo from '../../Logo/tagama-png.png';



class MainLayout extends React.Component {

    handleClose = () => {
        this.props.clearNotifications();
    };

    render() {
        console.log(this.props.loading);
        return (
            <div>
                <div>
                    <CssBaseline />
                    <AppBar position="fixed" style={{ backgroundColor: '#f2f2f2' }}>
                        <Toolbar>
                        <img src={logo} style={{height:"5%",width: "5%"}}/>
                        <NavbarMain/>
                        <NavbarRight/>
                        

                        </Toolbar>
                    </AppBar>

{/* 
                    <Slide direction="left" in={this.props.open} unmountOnExit>
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            open={this.props.open}
                            variant={this.props.variant}
                            autoHideDuration={6000}
                            onClose={this.handleClose}
                            ContentProps={{
                                'aria-describedby': 'message-id',
                            }}
                        >
                            <MySnackbarContent
                                onClose={this.handleClose}
                                variant={this.props.variant}
                                message={this.props.message}
                            />
                        </Snackbar>
                    </Slide> */}

                    <main>
                        {this.props.loading == true ? <LinearProgress  color="primary"/> :
                            <div style={{ height: 10+ 'px' }}></div>}

                        <Route path="/" component={HomeContainer}/>
                        <Route path="/home" component={HomeContainer}/>
                        <Route path="/app/dashboard" component={dashboardContainer} />

                        <Route path="/app/users" component={Users} />
                        <Route path="/app/users/update/:id" component={UpdateUserContainer} />
                        <Route path="/app/users/delete/:id" component={DeleteUserContainer} />
                        <Route path="/app/users/details/:id" component={DetailsUserContainer} />
                        <Route path="/app/users/create" component={CreateUserContainer} />
                        <Route path="/app/users/reset_password/:id" component={ResetPasswordUserContainer} />

                        <Route path="/app/groups" component={Groups} />
                        <Route path="/app/groups/create" component={createGroupsContainer} />
                        <Route path="/app/groups/details/:id" component={DetailsGroupsContainer} />
                        <Route path="/app/groups/delete/:id" component={DeleteGroupsContainer} />
                        <Route path="/app/groups/update/:id" component={UpdateGroupContainer} />
                        <Route path="/app/groups/:id/users" component={AddUserToGroupContainer} />

                        <Route path="/app/privileges" component={Privileges} />
                        <Route path="/app/privileges/:id/users" component={AddPrivilegeToUserContainer} />
                        <Route path="/app/privileges/:id/groups" component={AddPrivilegeToGroupContainer} />

                        <Route path="/app/profile" component={ProfileContainer} />

                        <Route path="/app/settings" component={SystemSettingsContainer} />

                        <Route path="/app/audit" component={AuditContainer} />

                        <Route path="/app/error/unauthorized" component={UnauthorizedContainer} />

                        <Route path="/app/folders" component={FoldersContainer}/>
                        <Route path="/app/folders/path/:id" component={AddPathFolderContainer}/>

                        <Route path="/app/scans" component={ScansContainer}/>
                        <Route path="/app/scans/missingFiles" component={ScansMissingFilesContainer}/>
                        
                        <Route path="/app/reports" component={ReportsContainer}/>
                        <Route path="/app/reports/daily/:date" component={ReportsIndividualContainer}/>
                        <Route path="/app/reports/generate/monthly" component={MonthlyReportContainer}/>


                    </main>
                </div>
            </div>
        );
    }
}

MainLayout.propTypes = {
    //   classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        open: state.mainReducer.open,
        variant: state.mainReducer.variant,
        message: state.mainReducer.message,
        loading: state.mainReducer.loading
    }
};


export default connect(mapStateToProps, ({
    clearNotifications() {
        return { type: CLEAR_NOTIFICATIONS, payload: null }
    },

}))(MainLayout);