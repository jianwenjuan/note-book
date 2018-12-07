<template>
  <div class="note-app-container">
    <div class="note-main-container">
      
      <!-- 左侧菜单区域 -->
      <div class="note-left-menu" v-show="$store.state.isShowLeftMenu">
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
      </div>
      <!-- 右侧内容区域 -->
      <div class="note-right-content" :class="[$store.state.isShowLeftMenu?'':'noLeft']">
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
    </div>
  </div>
</template>

<script>
import collection from "@/component/collection/collection.vue";
import book from "@/component/book/book.vue";
import lableContent from "@/component/lable/lable.vue";
import shareComponent from "@/component/share/share.vue";
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
        this.$store.commit("hideInfo");
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
      } else if (routeName === "/") {
        this.$store.commit("navToHome");
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
</style>
