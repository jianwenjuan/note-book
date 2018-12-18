
import axiosRequest from '@/service/axios.js';

import qs from 'qs';

const action = {

    async login({ commit, state }, data) {
        let loginRequest = await axiosRequest.post('/user/login', qs.stringify(data))
        return loginRequest;
    },

    async register({ commit, state }, data) {
        let registerRequest = await axiosRequest.post('/user/register', qs.stringify(data))

        return registerRequest;
    },

    async addBook({commit, state },data) {
        let addBookRequest = await axiosRequest.post('/book/addBook', qs.stringify(data))
        return addBookRequest;
    }



}

export default action;