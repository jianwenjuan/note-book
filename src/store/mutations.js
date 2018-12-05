export default {

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
    search(state) {
        state.collectionShow = false;
        state.bookShow = false;
        state.lableShow = false;
        state.noteShow = false; 
        state.addShow = false;
        state.searchShow = true;
        state.shareShow = false;

    },
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
        if(state.collectionShow === false) {
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
        if(state.bookShow === false) {
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
        if(state.lableShow === false) {
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

    navToCreate(state) {
        if(state.isShowLeftMenu) {
            state.isShowLeftMenu = false;
        }
    },

    navToHome(state) {
        if(!state.isShowLeftMenu) {
            state.isShowLeftMenu = true;
        }
        state.addShow = false;
        state.noteShow = true;

    }

}