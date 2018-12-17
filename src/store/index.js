import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import mutations from './mutations';
import getters from './getters';
import actions from './actions';

const store = new Vuex.Store({
  state: {
    isLogin: true,

    user:{
      login_username: '',
      login_token: '',
      login_password: '',
  

    },
   

    isShowLeftMenu: true, //是否显示左侧菜单
    addShow: false,  //控制添加按钮的点击状态
    searchShow: false, //控制搜索展示

    shareShow: false, //控制分享面板显示
    noteShow: true, //控制笔记显示
    collectionShow: false, //控制收藏面板的显示隐藏     
    bookShow: false, //控制笔记本显示隐藏
    lableShow: false, //控制标签显示隐藏

    alarmList: [], //已设置提醒的数据

    //书本列表
    bookList: [],
    selectedBook:null,

    // 笔记列表
    noteList: []


  },
  mutations,
  getters,
  actions

})

export default store;
