import apiClient from './client';

let url = '/day2day/info/alljoin/'
const listing = ()=> apiClient.get(url)


export default {
    listing
}