
import axiosRequest from '@/service/axios.js'

const action = {

    async login({ commit, state }, data) {
        let loginRequest = await axiosRequest.get('/user/login', {
            params: {
                'username': data.username,
                'password': data.password
            }
        })


        return loginRequest;



    },

}

export default action;