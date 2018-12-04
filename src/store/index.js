import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import mutations from './mutations'

const store = new Vuex.Store({
    state: {
        addShow: false,
        searchShow: false,
        shareShow: false,

        noteShow: true, //控制笔记显示
        collectionShow: false, //控制收藏面板的显示隐藏     
        bookShow: false, //控制笔记本显示隐藏
        lableShow: false //控制标签显示隐藏
    },
    mutations

})

export default store