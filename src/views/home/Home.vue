<template>
  <div class="note-home-container">
    <!-- 搜素区域 -->
    <transition name="slide-fade">
      <div class="note-search-area" v-if="$store.state.searchShow">
        <input type="text" v-modal="searchInfo" placeholder="搜索笔记" @keydown.enter="searchDown">
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
        <div class="note-module-title" v-if="!$store.state.selectedBook">
          <div>
            <h4>笔记</h4>
            <div class="note-info">
              <div class="note-total">
                <span>{{noteList.length}}</span>条笔记
              </div>
              <div class="note-chose">
                选项
                <span class="iconfont icon-jiantouxia"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="book-module-title" v-if="$store.state.selectedBook">
          <div class="book-name">{{$store.state.selectedBook.name}}</div>
        </div>

        <!-- 设置过提醒列表 -->
        <div class="node-list-container">
          <div class="alarm-note-list-wrap" v-if="$store.state.alarmList.length">
            <div class="toggle-btn" @click="toggleAlarmList()">
              <div class="left">
                <span
                  class="iconfont"
                  :class="[isShowAlarmList?'icon-jiantouxia':'icon-jiantouyou']"
                ></span>
                <span class="text">提醒</span>
              </div>
              <div class="right">
                <div v-show="!isShowAlarmList">
                  <span class="num">{{$store.state.alarmList.length}}</span>
                  <span class="iconfont icon-naozhong"></span>
                </div>
                <div v-show="isShowAlarmList">
                  <span class="iconfont icon-shezhi"></span>
                </div>
              </div>
            </div>

            <ul class="alarm-note-list" v-show="isShowAlarmList">
              <li class="book-list" v-for="(item,index) in $store.state.alarmList" :key="index">
                <div class="book" @click="dropNotes(item)">
                  <div class="left">
                    <span class="iconfont icon-book"></span>
                    <span>{{item.book.name}}</span>
                  </div>
                  <div class="right">
                    <span
                      class="iconfont"
                      :class="[item.isShowNotes?'icon-jiantouxia':'icon-jiantouyou']"
                    ></span>
                  </div>
                </div>
                <ul class="book-note-list" v-show="item.isShowNotes">
                  <li v-for="(note,i) in item.noteList" :key="i" @click="selectNote(note)">
                    <div class="info">
                      <span class="iconfont icon-biji1"></span>
                      <span>{{note.title}}</span>
                    </div>
                    <div class="handler">
                      <span @click.stop="setAlarm(note,$event)">编辑</span>
                      <span class="iconfont icon-weixuanzhong"></span>
                    </div>
                  </li>
                </ul>
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
                  <span
                    class="iconfont"
                    :class="[item.isAlarm ? 'icon-naozhong': 'icon-alarmclock']"
                  ></span>
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


          <!-- 操作提示 -->
          <div class="note-handler-tip" v-show="!$store.state.noteList.length">
            <img src="../../assets/note.png">
            <p>点击 + 添加笔记</p>
          </div>
        </div>
      </div>
      <div class="note-detail-area" v-show="noteList.length">
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

        <editorComponent v-if="true" :noteDetail="selectedNote" :isEditor="true"></editorComponent>
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
import editorComponent from "@/component/noteEditor.vue";

import setAlarm from "../view-component/setAlarm.vue";
import { mapState,mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      searchInfo: "",
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
    // 在列表设置提醒
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

    // 在详情里设置提醒
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
    // 设置快捷方式
    storeNote(item) {
      item.isStore = !item.isStore;
    },

    // 删除笔记
    deleteNote(item) {
      this.$Modal.confirm({
        showCancel: true,
        content: "您确定要删除这条笔记吗？",
        onCancel: () => {},
        onOk: () => {
          this.$store.commit("deletNote", item);
          this.noteList.forEach(item => {
            if (item.selected) {
              this.selectedNote = item;
            }
          });
        }
      });
    },

    // 选中笔记
    selectNote(item) {
      this.noteList.forEach(obj => {
        obj.selected = false;
        if (obj.id === item.id) {
          obj.selected = true;
        }
      });
      this.isItemSet = false;
      this.selectedNote = item;
    },

    // 切换设置提醒面板
    toggleAlarmList() {
      this.isShowAlarmList = !this.isShowAlarmList;
    },
    dropNotes(item) {
      item.isShowNotes = !item.isShowNotes;
    },
    // 搜索
    searchDown() {
      const _self = this;
      this.noteList = this.$store.state.noteList.filter(item => {
        return item.title.match(this.searchInfo);
      });
    }
  },
  created() {
    if(this.$store.state.selectedBook){
      this.noteList = this.$store.state.selectedBook.noteList;
    } else {
      this.noteList = this.$store.state.noteList;
    }
    
    // 默认展示第一条数据
    this.noteList.forEach(item => {
      if (item.selected) {
        this.selectedNote = item;
      }
    });

    // 点击其他地方关闭面板
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
  computed:{
    ...mapGetters([
      'getSelectedBook'
    ])
  },
  watch: {
    getSelectedBook:function(data){
      if(data && data.noteList) {
        this.noteList = data.noteList;
        this.selectedNote = this.noteList[0];

      } else {
        this.noteList = this.$store.state.noteList;
      }
      
    }

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
.note-handler-tip {
  text-align: center;
  padding-top: 40px;

  p {
    text-align: center;
  }
}
</style>
