import axios from 'axios';
import Vue from 'vue'

const axiosRequest = axios.create({
    baseURL: 'http://localhost:8083'
});

let vue = new Vue();

axiosRequest.interceptors.response.use(function (response) {
    return response.data
}, function (error) {
    vue.$Modal.error({
        content: '网络请求失败！请检查您的网络设置！'
    })
    return Promise.reject(error)
})


export default axiosRequest;






