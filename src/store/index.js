import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import mutations from './mutations';
import getters from './getters'

const store = new Vuex.Store({
    state: {
        isShowLeftMenu: true, //是否显示左侧菜单
        addShow: false,  //控制添加按钮的点击状态
        searchShow: false, //控制搜索展示
        
        shareShow: false, //控制分享面板显示
        noteShow: true, //控制笔记显示
        collectionShow: false, //控制收藏面板的显示隐藏     
        bookShow: false, //控制笔记本显示隐藏
        lableShow: false, //控制标签显示隐藏

        alarmList:[], //已设置提醒的数据
        
        //书本列表
        bookList:[{
          id:'1',
          name:'项目'

        },
        {
          id:'2',
          name:'js基础'

        }], 
        
        // 笔记列表
        noteList: [
            {
              id: "1",
              isAlarm: false,
              isStore: true,
              title: "123",
              createTime: "20 分钟前",
              primary: "hgh",
              selected: true,
              book: {
                id:'1',
                name: '项目'
                
              }
            },
            {
              id: "2",
              isAlarm: false,
              isStore: false,
              title: "453",
              createTime: "20 分钟前",
              primary: "124555ggfg5",
              selected: false,
              book: {
                id:'1',
                name: '项目'
                
              }
            },
            {
              id: "3",
              isAlarm: false,
              isStore: false,
              title: "893",
              createTime: "20 分钟前",
              primary: "mmmm",
              selected: false,
              book: {
                id:'1',
                name: '项目'
                
              }
            },
            {
              id: "4",
              isAlarm: false,
              isStore: false,
              title: "185",
              createTime: "20 分钟前",
              primary: "trtt",
              selected: false,
              book: {
                id:'2',
                name: 'js基础'
                
              }
            },
            {
              id: "5",
              isAlarm: false,
              isStore: false,
              title: "1553",
              createTime: "20 分钟前",
              primary: "mkkkk",
              selected: false,
              book: {
                id:'2',
                name: 'js基础'
                
              }
            },
            {
              id: "6",
              isAlarm: false,
              isStore: false,
              title: "222",
              createTime: "20 分钟前",
              primary: "eteyu",
              selected: false,
              book: {
                id:'2',
                name: 'js基础'
                
              }
            },
            {
              id: "7",
              isAlarm: false,
              isStore: false,
              title: "sss",
              createTime: "20 分钟前",
              primary: "mmkkk",
              selected: false,
              book:  {
                id:'2',
                name: 'js基础'
                
              }
            }
          ]


    },
    mutations,
    getters

})

export default store
