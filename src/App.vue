<template>
  <div id="app" class="note-app-container">
    <!-- 左侧菜单区域 -->
    <div class="note-left-menu">
      <!-- logo -->
      <div class="logo">
        <span class="iconfont icon-damailogo"></span>
      </div>

      <!-- 新建 搜索 分享 -->
      <div class="menu-top">
        <div class="menu-btn" v-for="(item) in btnList"
        :class="[item.id === activedMenu ?'active':'']"
        :title="item.title"
        :key="item.id"
        @click="menuClick(item)">
          <span class="iconfont" :class="[item.icon]"></span>
        </div>
      </div>

      <!-- 搜藏 笔记 笔记本 标签 -->
      <div class="menu-middle">
        <div class="menu-btn" v-for="(item) in menuList"
        :class="[item.id === activedMenu ?'active':'']"
        :title="item.title"
        :key="item.id"
        @click="menuClick(item)">
          <span class="iconfont" :class="[item.icon]"></span>
        </div>
      </div>
    </div>
    <!-- 右侧内容区域 -->
    <div class="note-right-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      btnList: [
        {
          id: 'add',
          title: '添加笔记',
          icon: 'icon-tianjia'
        },
        {
          id: 'search',
          title: '搜索',
          icon: 'icon-sousuo'
        },
        {
          id: 'share',
          title: '分享',
          icon: 'icon-fenxiang'
        }
      ],
      menuList: [
        {
          id: 'store',
          title: '收藏',
          icon: 'icon-store'
        },
        {
          id: 'note',
          title: '笔记',
          icon: 'icon-biji'
        },
        {
          id: 'book',
          title: '笔记本',
          icon: 'icon-book'
        },
        {
          id: 'lable',
          title: '标签',
          icon: 'icon-biaoqian'
        }
      ],
      activedMenu: 'note'
    }
  },
  methods: {
    menuClick (item) {
      this.activedMenu = item.id
    }
  }
}
</script>

<style lang="scss">
  .note-app-container{
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    .note-left-menu{
      width: 80px;
      height: 100%;
      border-right: 1px solid #ccc;
      text-align: center;
  
      .logo{
        .iconfont{
          font-size: 40px;
          color: $color-primary;
        }
      }
      .menu-top{
        font-size: 0;
        margin-top: 32px;
        .menu-btn{
          border: 1px solid #ccc;
  
          .iconfont{
            font-weight: bold;
          }
        }
      }
  
      .menu-btn{
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-top: 16px;
        text-align: center;
        line-height: 40px;
        cursor: pointer;
  
        .iconfont{
          color: $color-primary;
          
        }
  
        &.active{
          background: $color-primary;
          border-color: $color-primary;
  
          .iconfont{
            color: #fff;
          }
        }
  
        &:hover{
          background: $color-primary;
          border-color: $color-primary;
  
          .iconfont{
            color: #fff;
          }
        }
      }
  
      .menu-middle{
        margin-top: 32px;
  
        .iconfont{
          font-size: 20px;
        }
      }
    }
  
    .note-right-content{
      flex: 1;
    }
  
  }
</style>

