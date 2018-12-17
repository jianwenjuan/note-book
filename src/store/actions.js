
import axiosRequest from '@/service/axios.js';

import qs from 'qs';

const action = {

    async login({ commit, state }, data) {
        console.log(data);
        let loginRequest = await axiosRequest.post('/user/login', qs.stringify(data))

        return loginRequest;



    },

    async register({ commit, state }, data) {
        let registerRequest = await axiosRequest.post('/user/register', qs.stringify(data))

        return registerRequest;
    }

}

export default action;