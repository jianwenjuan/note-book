import common from '../common/common';

export default {

    //点击新建按钮
    add(state) {
        state.collectionShow = false;
        state.bookShow = false;
        state.lableShow = false;
        state.noteShow = false;
        state.addShow = true;
        state.searchShow = false;
        state.shareShow = false;

        state.isShowLeftMenu = false;

    },

    // 点击搜索
    search(state) {
        state.collectionShow = false;
        state.bookShow = false;
        state.lableShow = false;
        state.noteShow = false;
        state.addShow = false;
        state.searchShow = true;
        state.shareShow = false;

    },

    // 点击分享
    share(state) {
        state.collectionShow = false;
        state.bookShow = false;
        state.lableShow = false;
        state.noteShow = false;
        state.addShow = false;
        state.searchShow = false;
        state.shareShow = true;

    },

    // 收藏显示隐藏
    collect(state) {
        state.collectionShow = !state.collectionShow;
        state.bookShow = false;
        state.lableShow = false;
        state.noteShow = false;
        state.addShow = false;
        state.searchShow = false;
        state.shareShow = false;
        if (state.collectionShow === false) {
            state.noteShow = true;
        }

    },


    book(state) {
        state.collectionShow = false
        state.bookShow = !state.bookShow;
        state.lableShow = false;
        state.noteShow = false;
        state.addShow = false;
        state.searchShow = false;
        state.shareShow = false;
        if (state.bookShow === false) {
            state.noteShow = true;
        }
    },

    lable(state) {
        state.collectionShow = false
        state.bookShow = false;
        state.lableShow = !state.lableShow;
        state.noteShow = false;
        state.addShow = false;
        state.searchShow = false;
        state.shareShow = false;
        if (state.lableShow === false) {
            state.noteShow = true;
        }

    },

    hideInfo(state) {
        state.collectionShow = false
        state.bookShow = false;
        state.lableShow = false;
        state.noteShow = true;
        state.addShow = false;
        state.searchShow = false;
        state.shareShow = false;
    },

    // 跳转至新建
    navToCreate(state) {
        if (state.isShowLeftMenu) {
            state.isShowLeftMenu = false;
        }
    },

    // 跳转至home
    navToHome(state) {
        if (!state.isShowLeftMenu) {
            state.isShowLeftMenu = true;
        }
        state.addShow = false;
        state.noteShow = true;

    },

    // 添加设置提醒的数据
    addAlarmData(state, data) {
        if (data.isAlarm) {
            state.alarmList.push(data);

        }

        console.log(state.alarmList);

    },

    // 清楚设置提醒的数据
    removeAlarmData(state, data) {
        state.noteList.forEach(item => {
            if(item.id === data.id) {
                item.isAlarm = false;
            }
            
        });
        state.alarmList = state.alarmList.filter((item) => {
            return item.id !== data.id;

        })

        console.log(state.alarmList);
    },

    // 编辑日记
    editorNote(state,data){

        state.noteList.forEach(item => {
            if(item.id === data.id) {
                common.deepCopy(data,item);
            }
            
        });

        console.log(state.noteList);

         
    },

    // 新增日记
    creatNote(state,data){
        console.log(data);
        state.noteList.push(data);

    },
    
    // 删除日记
    deletNote(state,data) {

        state.noteList.forEach((item,index)=>{
            if(item.id === data.id){
                state.noteList.splice(index,1);
         
            }

        });

        if(data.selected){
            state.noteList[0].selected = true;
        }


    }



}