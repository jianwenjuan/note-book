<template>
  <div class="note-home-container">
    <!-- 搜素区域 -->
    <transition name="slide-fade">
      <div class="note-search-area" v-if="$store.state.searchShow">
        <input type="text" placeholder="搜索笔记">

        <div class="slect-book-area">
          <span class="info">正在搜索</span>
          <div class="select-btn">
            <span class="iconfont icon-book"></span>
            <span class="text">项目</span>
            <span class="iconfont icon-jiantouxia"></span>
          </div>
        </div>
      </div>
    </transition>

    <div class="note-home" :class="[$store.state.searchShow?'search-show':'']">
      <!-- 左侧 -->
      <div class="note-list-area" v-show="$store.state.isShowLeftMenu">
        <!-- 标题区域 -->
        <div class="note-module-title">
          <h4>笔记</h4>
          <div class="note-info">
            <div class="note-total">
              <span>1</span>条笔记
            </div>
            <div class="note-chose">
              选项
              <span class="iconfont icon-jiantouxia"></span>
            </div>
          </div>
        </div>

        <!-- 列表区域 -->
        <div class="note-list-wrap">
          <div
            class="note-item"
            v-for="(item) in noteList"
            :key="item.id"
            :class="[item.selected ? 'active':'']"
            @click="selectNote(item)"
          >
            <div class="handle-area">
              <div @click.stop="setAlarm(item,$event)" title="设置提醒">
                <span class="iconfont" :class="[item.isAlarm ? 'icon-naozhong': 'icon-alarmclock']"></span>
              </div>
              <div @click.stop="storeNote(item)" title="添加快捷方式">
                <span class="iconfont" :class="[item.isStore ? 'icon-store': 'icon-xingxing']"></span>
              </div>
              <div @click.stop="deleteNote(item)" title="删除">
                <span class="iconfont icon-shanchu"></span>
              </div>
            </div>
            <div class="note-title">{{item.title}}</div>
            <div class="note-create-time">{{item.createTime}}</div>
            <div class="note-primary">{{item.primary}}</div>
          </div>
        </div>
      </div>
      <div class="note-detail-area">
        <!-- 操作区域 -->
        <div class="handler-area">
          <div title="设置提醒">
            <span class="iconfont icon-alarmclock"></span>
          </div>
          <div title="添加快捷方式">
            <span class="iconfont icon-xingxing"></span>
          </div>
          <div title="删除">
            <span class="iconfont icon-shanchu"></span>
          </div>
          <div title="笔记信息">
            <span class="iconfont icon-tishishuoming"></span>
          </div>
          <div title="更多">
            <span class="iconfont icon-gengduo"></span>
          </div>
        </div>

        <editorComponent :noteDetail="selectedNote"></editorComponent>
      </div>
    </div>

    <setAlarm :x="clientX" :y="clientY"></setAlarm>
  </div>
</template>

<script>
import editorComponent from "@/component/editor/noteEditor.vue";

import setAlarm from "@/component/func/setAlarm.vue";
export default {
  name: "Home",
  data() {
    return {
      noteList: [
        {
          id: "1",
          isAlarm: true,
          isStore: true,
          title: "123",
          createTime: "20 分钟前",
          primary: "hgh",
          selected: true
        },
        {
          id: "2",
          isAlarm: false,
          isStore: false,
          title: "453",
          createTime: "20 分钟前",
          primary: "124555ggfg5",
          selected: false
        },
        {
          id: "3",
          isAlarm: false,
          isStore: false,
          title: "893",
          createTime: "20 分钟前",
          primary: "mmmm",
          selected: false
        },
        {
          id: "4",
          isAlarm: false,
          isStore: false,
          title: "185",
          createTime: "20 分钟前",
          primary: "trtt",
          selected: false
        },
        {
          id: "5",
          isAlarm: false,
          isStore: false,
          title: "1553",
          createTime: "20 分钟前",
          primary: "mkkkk",
          selected: false
        },
        {
          id: "6",
          isAlarm: false,
          isStore: false,
          title: "222",
          createTime: "20 分钟前",
          primary: "eteyu",
          selected: false
        },
        {
          id: "7",
          isAlarm: false,
          isStore: false,
          title: "sss",
          createTime: "20 分钟前",
          primary: "mmkkk",
          selected: false
        }
      ],
      selectedNote: {},
      postion: {

      }
    };
  },
  methods: {
    setAlarm(item,$event) {
      console.log($event);
      this.clientX = $event.x;
      this.clientY = $event.y;
      item.isAlarm = !item.isAlarm;
    },
    storeNote(item) {
      item.isStore = !item.isStore;
    },
    deleteNote(item) {
      alert("删除笔记");
    },
    selectNote(item) {
      this.noteList.forEach(obj => {
        obj.selected = false;
      });
      item.selected = true;

      this.selectedNote = item;


    }
  },
  components: { editorComponent,setAlarm }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/assets/css/home.scss";

.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-enter {
  transform: translateY(-300px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(-300px);
  opacity: 0;
}
</style>
