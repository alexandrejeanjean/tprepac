import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.API_URL + '/api',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    },
});

export function setAuthorization(Authorization: any) {
    apiClient.defaults.headers.common.Authorization = Authorization;
}

export default apiClient;
