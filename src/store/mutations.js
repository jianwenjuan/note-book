import common from '../common/common';


export default {

    toLogin(state) {
        state.isLogin = false;
    },

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

    // 
    navToNote(state) {
        state.selectedBook = null;
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
        const len = state.alarmList.length;
        if (len) {
            const isContainBook = state.alarmList.some((item) => {
                if (item.book.id === data.book.id) {
                    item.noteList.push(data);
                }
                return item.book.id === data.book.id;

            });

            if (!isContainBook) {
                state.alarmList.push({
                    book: data.book,
                    isShowNotes: false,
                    noteList: [data]
                })
            }

        } else {
            state.alarmList.push({
                book: data.book,
                isShowNotes: false,
                noteList: [data]
            })

        }
    },

    // 清楚设置提醒的数据
    removeAlarmData(state, data) {
        state.noteList.forEach(item => {
            if (item.id === data.id) {
                item.isAlarm = false;
            }

        });
        state.alarmList.forEach((item, i) => {
            item.noteList.forEach((lable, index) => {
                if (lable.id === data.id) {
                    item.noteList.splice(index, 1);
                }
            })

            if (!item.noteList.length) {
                state.alarmList.splice(i, 1);
            }
        })
    },

    // 编辑日记
    editorNote(state, data) {
        state.noteList.forEach(item => {
            if (item.id === data.id) {
                common.deepCopy(data, item);
            }
        });
    },

    // 新增日记
    creatNote(state, data) {
        // 日记列表新增数据
        state.noteList.forEach((item) => {
            item.selected = false;
        });

        // 显示新增数据的详情
        data.selected = true;
        state.noteList.push(data);

        state.bookList.forEach((item)=>{
            if(item.id === data.book.id){
                item.noteList.push(data);
            }
        })

    },

    // 删除日记
    deletNote(state, data) {
        state.noteList.forEach((item, index) => {
            if (item.id === data.id) {
                state.noteList.splice(index, 1);
            }
        });
        if (data.selected) {
            if (state.noteList.length) {
                state.noteList[0].selected = true;
            }
        }

        // 删除对应书本的数据
        state.bookList.forEach((item, i) => {
            if (item.id === data.book.id) {
                item.noteList.forEach((lable, index) => {
                    if (lable.id === data.id) {
                        item.noteList.splice(index, 1);

                        // 如果书本没有笔记，则删掉此书本
                        if (!item.noteList.length) {
                            state.bookList.splice(i, 1);
                        }
                    }

                })
            }

        })

        // 删除对应提醒的数据
        state.alarmList.forEach((item, i) => {
            if (item.book.id === data.book.id) {
                item.noteList.forEach((lable, index) => {
                    if (lable.id === data.id) {
                        item.noteList.splice(index, 1);

                        // 如果书本没有笔记，则删掉此书本
                        if (!item.noteList.length) {
                            state.alarmList.splice(i, 1);
                        }
                    }
                })
            }
        })

    },

    createBook(state) {
        state.isShowAddBook = true;
    },

    cancelAddBook(state){
        state.isShowAddBook = false;
    },

    addBook(state,data){
        state.isShowAddBook = false;
        state.bookList.push(data);

    },


    // 删除书本
    deletBook(state, data) {
        state.bookList.forEach((item, index) => {
            if (item.id === data.id) {
                state.bookList.splice(index, 1);
            }

        });

        for (let i = 0; i < state.noteList.length; i++) {
            for (let j = 0; j < data.noteList.length; j++) {
                if (state.noteList[i].id === data.noteList[j].id) {
                    state.noteList.splice(i, 1);
                }
            }

        }

        state.alarmList.forEach((alarmItem, index) => {
            if (alarmItem.book.id === data.id) {
                state.alarmList.splice(index, 1);
            }
        })


    },

    // 选中书本
    selectBook(state, data) {
        state.bookList.forEach((item)=>{
            item.selected = false;

        })
        data.selected = true;
        state.selectedBook = data;
        state.bookShow = false;
    }



}