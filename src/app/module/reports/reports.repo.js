import axios from 'axios';
import {getServerApiURL} from '../../shared/app.properties';

const SERVER_API_URL                = getServerApiURL();

export function getByDate(date,page,size){
    return axios.get(SERVER_API_URL+`/registerbooks/by_date?date=${date}&page=${page}&size=${size}`);
}
export function getByDateReport(month,year){
    return axios.get(SERVER_API_URL+`/registerbooks/reports/by_date?month=${month}&year=${year}`);
}
export function getAllScans(){
    return axios.get(SERVER_API_URL+`/registerbooks/records`);

}
