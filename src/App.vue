<template>
  <div class="note-app-container">
    <div class="note-main-container">
      <!-- 左侧菜单区域 -->
      <div class="note-left-menu" v-show="$store.state.isLogin && $store.state.isShowLeftMenu">
        <!-- logo -->
        <div class="logo">
          <span class="iconfont icon-damailogo"></span>
        </div>

        <!-- 新建 搜索 分享 -->
        <div class="menu-top">
          <div
            class="menu-btn"
            v-for="(item) in btnList"
            :class="[$store.state[item.click] ?'active':'']"
            :title="item.title"
            :key="item.id"
            @click="menuClick(item)"
          >
            <span class="iconfont" :class="[item.icon]"></span>
          </div>
        </div>

        <!-- 搜藏 笔记 笔记本 标签 -->
        <div class="menu-middle">
          <div
            class="menu-btn"
            v-for="(item) in menuList"
            :class="[$store.state[item.click] ?'active':'']"
            :title="item.title"
            :key="item.id"
            @click="menuClick(item)"
          >
            <span class="iconfont" :class="[item.icon]"></span>
          </div>
        </div>

        <!-- 头像 -->
        <div class="aventor" title="退出登录" @click="logout">
          <span class="iconfont icon-tuichu"></span>
        </div>
      </div>
      <!-- 右侧内容区域 -->
      <div
        class="note-right-content"
        :class="[$store.state.isLogin && $store.state.isShowLeftMenu?'':'noLeft']"
      >
        <router-view/>

        <!-- 收藏 笔记本 标签面板区 -->
        <transition name="fade">
          <div
            class="info-panel"
            v-show="$store.state.bookShow || $store.state.collectionShow 
            || $store.state.lableShow || $store.state.shareShow"
            @click.self="hideInfo()"
          >
            <transition name="slide-fade">
              <div class="info" v-show="$store.state.bookShow">
                <book></book>
              </div>
            </transition>
            <transition name="slide-fade">
              <div class="info" v-show="$store.state.collectionShow">
                <collection></collection>
              </div>
            </transition>
            <transition name="slide-fade">
              <div class="info" v-show="$store.state.lableShow">
                <lableContent></lableContent>
              </div>
            </transition>
            <transition name="slide-fade">
              <div class="info" v-show="$store.state.shareShow">
                <shareComponent></shareComponent>
              </div>
            </transition>
          </div>
        </transition>
      </div>

      <!-- 新增书本 -->
      <Modal
        :value="$store.state.isShowAddBook"
        :height="200"
        :cancelCallback="cancelAddBook"
        :okCallback="addBook"
      >
        <div slot="header">新建笔记</div>
        <div class="modal-body">
          <input class="book-inpt" type="text" placeholder="请输入书名" v-model="bookName">
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
import collection from "@/views/collection/collection.vue";
import book from "@/views/book/book.vue";
import lableContent from "@/views/lable/lable.vue";
import shareComponent from "@/views/share/share.vue";
import common from "@/common/common.js";

export default {
  name: "App",
  data() {
    return {
      btnList: [
        {
          id: "add",
          title: "添加笔记",
          icon: "icon-tianjia",
          click: "addShow"
        },
        {
          id: "search",
          title: "搜索",
          icon: "icon-sousuo",
          click: "searchShow"
        },
        {
          id: "share",
          title: "分享",
          icon: "icon-fenxiang",
          click: "shareShow"
        }
      ],
      menuList: [
        {
          id: "store",
          title: "快捷方式",
          icon: "icon-store",
          click: "collectionShow"
        },
        {
          id: "note",
          title: "笔记",
          icon: "icon-biji",
          click: "noteShow"
        },
        {
          id: "book",
          title: "笔记本",
          icon: "icon-book",
          click: "bookShow"
        },
        {
          id: "lable",
          title: "标签",
          icon: "icon-biaoqian",
          click: "lableShow"
        }
      ],
      activedMenu: "note"
    };
  },
  methods: {
    menuClick(item) {
      this.activedMenu = item.id;
      if (item.id === "store") {
        this.$store.commit("collect");
      } else if (item.id === "book") {
        this.$store.commit("book");
      } else if (item.id === "lable") {
        this.$store.commit("lable");
      } else if (item.id === "note") {
        this.$store.commit("navToNote");
        this.hideInfo();
      } else if (item.id === "add") {
        this.$router.push("/create");
        this.$store.commit("add");
      } else if (item.id === "search") {
        this.$store.commit("search");
      } else if (item.id === "share") {
        this.$store.commit("share");
      }
    },
    hideInfo() {
      this.$store.commit("hideInfo");
    },
    logout() {
      const _self = this;
      this.$Modal.confirm({
        content: "确定要退出登录吗？",
        showCancel: true,
        onOk: () => {
          common.delCookie("session");
          _self.$router.push("/login");
        }
      });
    },
    cancelAddBook() {
      this.$store.commit("cancelAddBook");
    },
    addBook() {
      const bookData = {
        id:`${Math.random() * 100}`,
        name:this.bookName,
        noteList:[]
      }
      this.$store.commit("addBook",bookData);
    }
  },
  components: { collection, book, lableContent, shareComponent },
  created() {
    //在页面加载时读取localStorage里的状态信息
    sessionStorage.getItem("userMsg") &&
      this.$store.replaceState(
        Object.assign(
          this.$store.state,
          JSON.parse(sessionStorage.getItem("userMsg"))
        )
      );

    //在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("userMsg", JSON.stringify(this.$store.state));
    });
  },
  watch: {
    $route() {
      //通过侦听路由对象的变化
      let routeName = this.$route.path;
      if (routeName === "/create") {
        this.$store.commit("navToCreate");
      } else if (routeName === "/home") {
        this.$store.commit("navToHome");
      } else if (routeName === "/login") {
        this.$store.commit("toLogin");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/css/main.scss";
.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s ease;
}
.slide-fade-enter {
  transform: translateX(-800px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(-800px);
  opacity: 0;
}
.aventor {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  bottom: 16px;
  left: 20px;
  cursor: pointer;
  text-align: center;

  .iconfont {
    font-size: 20px;
    font-weight: bold;
    color: $color-primary;
  }
}

.book-inpt {
  display: inline-block;
  width: 100%;
  height: 40px;
  padding: 0 16px;
  box-sizing: border-box;
  font-size: 16px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: 0;
}
</style>
