import axios from 'axios';
import { getServerApiURL, getCurrentAccessToken, getAuthorizationHeader } from '../../shared/app.properties';

const SERVER_API_URL                = getServerApiURL();
const MODULE_AUDIT_API_CONTEXT      = "/audit";

export const queryAuditLog = (payload) => {
    var page = payload.page;
    var size = payload.size;
    var auditType = payload.auditType;
    return axios({
        method: 'get',
        url: SERVER_API_URL + MODULE_AUDIT_API_CONTEXT 
        + "/query?access_token="+getCurrentAccessToken()
        + "&auditType=" + auditType 
        + "&page=" + page
        + "&size=" + size
        ,
        data: payload.user,
        headers:{
                'Content-type':'application/json;utf-8',
                'Authorization' : getAuthorizationHeader()
        }
        }).then(response => response);
};
