import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainLayout from './app/shared/MainLayout';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';

import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import {usersReducer} from './app/module/users/users.reducer';
import {mainReducer} from './app/shared/Main.Reducer';
import {usersSagas} from './app/module/users/users.saga';
import {groupsSagas} from './app/module/groups/groups.saga';
import {groupsReducer} from './app/module/groups/groups.reducer';
import LoginContainer from './app/auth/login/login.container';
import {profileSagas} from './app/module/profile/profile.saga';
import {profileReducer} from './app/module/profile/profile.reducer';
import {privilegesSagas} from './app/module/privileges/privileges.saga';
import {privilegesReducer} from './app/module/privileges/privileges.reducer';
import {dashboardSagas} from './app/module/dashboard/dashboard.saga';
import {dashboardReducer} from './app/module/dashboard/dashboard.reducer';
import { getCurrentAccessToken } from './app/shared/app.properties';
import HomeContainer from './app/module/pages/home.container';
import aboutUsContainer from './app/module/pages/aboutUs.container';
import contactContainer from './app/module/pages/contact.container';


const appReducer = combineReducers({
    usersReducer,
    mainReducer,
    groupsReducer,
    profileReducer,
    privilegesReducer,
    dashboardReducer

});

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        state = undefined
    }
    return appReducer(state, action)
}

export function dispatchAction(action) {
    store.dispatch(action);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(usersSagas);
sagaMiddleware.run(groupsSagas);
sagaMiddleware.run(privilegesSagas);
sagaMiddleware.run(profileSagas);
sagaMiddleware.run(dashboardSagas);

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  dispatchAction({ type: 'SHOW_LOADING' });
  if(!config.url.includes('access_token='))
  if(config.url.includes('&'))
  config.url = config.url + '&access_token=' + getCurrentAccessToken();
  else
  config.url = config.url + '?access_token=' + getCurrentAccessToken();
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  dispatchAction({ type: 'HIDE_LOADING' });
  return response;
}, function (err) {
  dispatchAction({ type: 'HIDE_LOADING' });
  return Promise.reject(err);
});

class App extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        {/*<Route path="/login" component={LoginContainer}/>*/}
                        {/* <Route path="/app" component={MainLayout}/> */}
                        <Route  path="/" component={HomeContainer}/> 
                        <Route path="/home" component={HomeContainer}/>
                        <Route path="/about_us" component={aboutUsContainer}/>
                        <Route path="/contact" component={contactContainer}/>

                        {/* <Route path="/error"  /> */}
                    </div>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
