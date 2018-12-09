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
        
        <!-- 设置过提醒列表 -->
        <div class="node-list-container">
          <div class="alarm-note-list-wrap" v-if="$store.state.alarmList.length">
            <div class="toggle-btn" @click="toggleAlarmList()">
              <div class="left">
                <span class="iconfont" :class="[isShowAlarmList?'icon-jiantouxia':'icon-jiantouyou']"></span>
                <span class="text">提醒</span>
              </div>
              <div class="right">
                <span class="num">{{$store.state.alarmList.length}}</span>
                <span class="iconfont icon-naozhong"></span>
              </div>
            </div>

            <ul class="alarm-note-list" v-show="isShowAlarmList">
              <li>
                <div v-for="(item,index) in $store.state.alarmList" :key="index">
                  <span></span>
                  <span>{{item.title}}</span>
                </div>
              </li>
            </ul>
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
      </div>
      <div class="note-detail-area">
        <!-- 操作区域 -->
        <div class="handler-area">
          <div title="设置提醒">
            <span
              class="iconfont icon-alarmclock"
              :class="[selectedNote.isAlarm ? 'icon-select': '']"
              @click="setNoteAlarm"
            ></span>
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

    <setAlarm
      :x="clientX"
      :y="clientY"
      :isShowSetAlarm="isSetAlarm"
      :noteDetail="isItemSet?needToSetAlarm:selectedNote"
      :showInfo="isSetShowInfo"
    ></setAlarm>
  </div>
</template>

<script>
import editorComponent from "@/component/editor/noteEditor.vue";

import setAlarm from "@/component/func/setAlarm.vue";
export default {
  name: "Home",
  data() {
    return {
      noteList: [],
      selectedNote: {},
      postion: {},
      isSetAlarm: false,
      clientX: 0,
      clientY: 0,
      needToSetAlarm: {},
      isItemSet: false, //标识点击的是列表设置提醒还是编辑设置提醒
      isShowAlarmList: false,
      isSetShowInfo: false //控制提醒面板显示内容
    };
  },
  methods: {
    setAlarm(item, $event) {
      // 显示清除提示面板
      this.isSetAlarm = true;
      this.clientX = $event.x;
      this.clientY = $event.y;
      this.needToSetAlarm = item;

      //标识点击的是列表设置提醒还是编辑设置提醒
      this.isItemSet = true;

      if (!item.isAlarm) {
        item.isAlarm = true;
        // 控制面板显示内容
        this.isSetShowInfo = true;
        this.$store.commit("addAlarmData", item);
      } else {
        this.isSetShowInfo = false;
      }
    },
    setNoteAlarm($event) {
      this.isSetAlarm = false;
      this.isSetAlarm = true;
      this.clientX = $event.x;
      this.clientY = $event.y;
      //标识点击的是列表设置提醒还是编辑设置提醒
      this.isItemSet = false;

      if (!this.selectedNote.isAlarm) {
        // 控制面板显示内容
        this.isSetShowInfo = true;
        this.selectedNote.isAlarm = true;

        this.$store.commit("addAlarmData", this.selectedNote);
      } else {
        this.isSetShowInfo = false;
      }
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
      this.isItemSet = false;

      this.selectedNote = item;
    },
    toggleAlarmList() {
      this.isShowAlarmList = !this.isShowAlarmList;
    }
  },
  created() {
    (this.noteList = this.$store.state.noteList),
      // 默认展示第一条数据
      (this.selectedNote = this.noteList.filter(item => {
        return item.selected === true;
      })[0]);
    const self = this;
    const alrmWrap = document.getElementById("alrmWrap");
    let body = document.querySelector("body");
    body.addEventListener(
      "click",
      e => {
        if (
          e.target.className.indexOf("icon-alarmclock") > -1 ||
          (alrmWrap && alrmWrap.contains(event.target))
        ) {
          self.isSetAlarm = true;
        } else {
          self.isSetAlarm = false;
        }
      },
      false
    );
  },

  components: { editorComponent, setAlarm }
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
