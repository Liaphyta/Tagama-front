import axios from 'axios';
import {getAuthorizationHeader, getCurrentAccessToken, getServerApiURL} from '../../shared/app.properties';

export const fetchAllSystemSettingsProps = (payload) => {
    return axios({
        url: getServerApiURL() + '/settings/props/all?access_token=' + getCurrentAccessToken(),
        method: 'GET',
        headers: {
            'Authorization': getAuthorizationHeader()
        }
    }).then(response => response);
};

export const updateSystemSettingsProp = (payload) => {
    return axios({
        url: getServerApiURL() + '/settings/props/update?access_token=' + getCurrentAccessToken() + "&key=" + payload.key + "&val=" + payload.val,
        method: 'POST',
        headers: {
            'Authorization': getAuthorizationHeader()
        }
    }).then(response => response);
};
