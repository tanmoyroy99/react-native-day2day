import apiClient from './client';

let loginURL = '/auth'
const login = (emailId,password, onUploadProgress)=> apiClient.post(loginURL, {emailId, password},{ onUploadProgress: (progress)=>{onUploadProgress(progress.loaded/progress.total)} })


export default {
    login
}