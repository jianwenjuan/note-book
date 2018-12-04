<template>
  <div class="note-home">
    <!-- 左侧 -->
    <div class="note-list-area">
      <!-- 标题区域 -->
      <div class="note-module-title">
        <h4>笔记</h4>
        <div class="note-info">
          <div class="note-total"><span>1</span>条笔记</div>
          <div class="note-chose">选项<span class="iconfont icon-jiantouxia"></span></div>
        </div>
      </div>

      <!-- 列表区域 -->
      <div class="note-list-wrap">
        <div class="note-item" v-for="(item) in noteList" :key='item.id'
        :class="[item.selected ? 'active':'']"
        @click="selectNote(item)">
          <div class="handle-area">
            <div @click.stop="setAlarm(item)">
              <span class="iconfont" :class="[item.isAlarm ? 'icon-naozhong': 'icon-alarmclock']"></span>
            </div>
            <div @click.stop="storeNote(item)">
              <span class="iconfont" :class="[item.isStore ? 'icon-store': 'icon-xingxing']"></span>
            </div>
            <div @click.stop="deleteNote(item)">
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
      <editorComponent></editorComponent>
    </div>
  </div>
   
</template>

<script>
import editorComponent from '@/component/editor/noteEditor.vue'
export default {
  name: 'Home',
  data () {
    return {
      noteList: [
        {
          id: '1',
          isAlarm: true,
          isStore: true,
          title: '123',
          createTime: '20 分钟前',
          primary: '1245555',
          selected: true
        },
        {
          id: '2',
          isAlarm: false,
          isStore: false,
          title: '123',
          createTime: '20 分钟前',
          primary: '1245555',
          selected: false
        },
        {
          id: '3',
          isAlarm: false,
          isStore: false,
          title: '123',
          createTime: '20 分钟前',
          primary: '1245555',
          selected: false
        },
        {
          id: '4',
          isAlarm: false,
          isStore: false,
          title: '123',
          createTime: '20 分钟前',
          primary: '1245555',
          selected: false
        },
        {
          id: '5',
          isAlarm: false,
          isStore: false,
          title: '123',
          createTime: '20 分钟前',
          primary: '1245555',
          selected: false
        },
        {
          id: '6',
          isAlarm: false,
          isStore: false,
          title: '123',
          createTime: '20 分钟前',
          primary: '1245555',
          selected: false
        },
        {
          id: '7',
          isAlarm: false,
          isStore: false,
          title: '123',
          createTime: '20 分钟前',
          primary: '1245555',
          selected: false
        }
      ]
    }
  },
  methods: {
    setAlarm (item) {
      item.isAlarm = !item.isAlarm
    },
    storeNote (item) {
      item.isStore = !item.isStore
    },
    deleteNote (item) {
      alert('删除笔记')
    },
    selectNote (item) {
      this.noteList.forEach((obj) => {
        obj.selected = false
      })
      item.selected = true
    }
  },
  components: { editorComponent }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/css/home.scss';
</style>
