import axios from 'axios';
import {getCurrentAccessToken, getServerApiURL} from '../../shared/app.properties';

const SERVER_API_URL                = getServerApiURL();

export function getBooksAndFolders(type,year,name,page,size){
    return axios.get(SERVER_API_URL+`/registerbooks/${type}/${year}/${name}?page=${page}&size=${size}`);
}
export function deletePathFolder(id)
{
    return axios.delete(SERVER_API_URL+`/registerbooks/deleteFolder/${id}`);
}
export function updateRegisterBook(registerBook)
{
    return axios.put(SERVER_API_URL+`/registerbooks`,registerBook);
}
export function getRegisterBookById(id){
    return axios.get(SERVER_API_URL+`/registerbooks/${id}`)
}
export function getBooksAndRecords(type,year,name,dateFrom,dateTo,page,size){
    return axios.get(SERVER_API_URL+`/registerbooks/records-date/${type}/${year}/${name}?dateFrom=${dateFrom}&dateTo=${dateTo}&page=${page}&size=${size}`)
}
export function listAllFolders(){
    return axios.get(SERVER_API_URL+`/registerbooks/folders/all`)
}
export function getMissingfiles(pathFolder,totalFiles){
    return axios.get(SERVER_API_URL+`/registerbooks/missing?pathFolder=${encodeURI(pathFolder)}&totalFiles=${totalFiles}`)
}