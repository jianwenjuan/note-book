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
      kkk
    </div>
  </div>
</template>

<script>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.note-home{
  position: absolute;
  height: 100%;
  display: flex;

  .note-list-area{
    width: 350px;
    height: 100%;
    border-right: 1px solid $color-border;

    .note-module-title{
      padding: 32px 32px 8px 32px;
      border-bottom: 1px solid $color-border;

      h4{
        font-size: 24px;
        color: #666;
        font-weight: 100;
        letter-spacing: 2px;
      }

      .note-info{
        margin-top: 32px;
        display: flex;

        .note-total{
          flex: 1;
          color: #666;
        }

        .note-chose{
          width: 100px;
          text-align: right;
          color: #333;
          cursor: pointer;

          .iconfont{
            font-size: 10px;
            margin-left: 4px;
          }
        }

      }
    }

    .note-list-wrap{
      height: calc(100% - 130px);
      overflow-y: scroll;

      .note-item{
        height: 120px;
        box-sizing: border-box;
        padding: 8px 32px;
        position: relative;
        cursor: pointer;
        &.active{
          &::after{
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            border: 3px solid #ddd;
            z-index: -1;
          }
        }

        .handle-area{
          position: absolute;
          top: 8px;
          right: 16px;

          >div{
            display: inline-block;
            margin-left: 8px;

            .iconfont{
              font-size: 20px;
              color: #fff;
            }

          }
        }

        .note-title{
          font-size: 18px;
        }
        .note-create-time{
          font-size: 12px;
          margin-top: 4px;
        }
        .note-primary{
          margin-top: 8px;
        }

        &:hover{
          background: $color-primary;
          border-color: $color-primary;

          .note-title{
            color: #fff;
          }
          .note-create-time{
            color: #fff;
          }
          .note-primary{
            color: #fff;
          }
          &::after{
            border: none;
          }
        }
      }
    }
  }

  .note-detail-area{
    flex: 1;
    padding:16px 32px;
  }
}
</style>
