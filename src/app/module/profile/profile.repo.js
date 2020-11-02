import axios from 'axios';
import {getCurrentAccessToken, getAuthorizationHeader, getServerApiURL} from '../../shared/app.properties';

export const fetchMainUserData = (payload) => {
    return axios({
        url: getServerApiURL() + '/users/me?access_token=' + getCurrentAccessToken(),
        method: 'GET',
        headers: {
            'Authorization' : getAuthorizationHeader()
        }
    });
};
