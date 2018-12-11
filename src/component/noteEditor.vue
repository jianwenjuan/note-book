<template>
  <div class="editor-wrap">
    <!-- 编辑区域 -->
    <div class="editor-head">
      <!-- 选择书本按钮区 -->
      <div class="select-book">
        <div id="selectBookBtn" class="book-display" @click="showBookList">
          <span class="iconfont icon-book"></span>
          <span class="text">{{currentBook.name}}</span>
          <span class="iconfont icon-jiantouxia"></span>
          <span class="iconfont icon-zhuanchu" title="前往笔记本"></span>
        </div>
        <!-- 书本选择列表 -->
        <div class="book-wrap" v-show="isShowBookList">
          <div class="search-book">
            <Input search placeholder="搜索笔记"/>
          </div>
          <div class="create-book">
            <span class="iconfont icon-xinjianpushu"></span>
            <span class="text">创建笔记本</span>
          </div>
          <div class="book-list">
            <div
              class="book-item"
              v-for="item in $store.state.bookList"
              :key="item.id"
              @click="choseBook(item)"
            >
              <div class="book-name">{{item.name}}</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <span class="iconfont icon-biaoqian"></span>
        <span class="text">新建标签</span>
      </div>
    </div>

    <!-- 内容区域 -->
    <div class="editor-content">
      <div class="content-title">
        <input type="text" v-model="note.title">
      </div>
      <div class="content-detail">
        <textarea v-model="note.primary"></textarea>
      </div>
    </div>

    <div class="save-btn" @click="submit">保存</div>
  </div>
</template>
<script>
import common from "../common/common";
export default {
  name: "editor",
  data() {
    return {
      isShowBookList: false,
      currentBook: {
        id: "8",
        name: "InBook"
      },
      note: common.deepCopy(this.noteDetail, {})
    };
  },
  props: {
    isEditor: true,
    noteDetail: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  methods: {
    // 显示书本列表面板
    showBookList() {
      this.isShowBookList = !this.isShowBookList;
    },

    // 点击保存
    submit() {
      if (this.isEditor) {
        // 如果是编辑
        this.update();
      } else {
        // 如果是新增
        this.create();
      }
    },

    // 编辑数据
    update() {
      this.$store.commit("editorNote", this.note);
    },

    // 新增数据
    create() {
      const newNoteData = {
        id: `${Math.random()*1000}`,
        isAlarm: false,
        isStore: false,
        title: this.note.title,
        createTime: "20 分钟前",
        primary: this.note.primary,
        selected: false,
        book: common.deepCopy(this.currentBook,{})
      };
      this.$store.commit("creatNote", newNoteData);
      this.$router.push("/");
    },

    // 切换书本
    choseBook(item) {
      this.currentBook = item;
      this.note.book = this.currentBook;
    }
  },
  watch: {
    noteDetail: {
      deep: true,
      handler(val, oldVal) {
        this.note = common.deepCopy(val, {});
        this.currentBook = common.deepCopy(val.book, {});
      }
    }
  },
  mounted() {},
  created() {
    if (this.noteDetail.book) {
      this.currentBook = this.noteDetail.book;
    }

    //  点击其他地方，关闭弹窗面板
    const self = this;
    this.$nextTick(() => {
      const selectBookBtn = document.getElementById("selectBookBtn");
      let body = document.querySelector("body");
      body.addEventListener(
        "click",
        e => {
          if (
            e.target.className.indexOf("book-display") > -1 ||
            (selectBookBtn &&
              selectBookBtn.contains(event.target) &&
              e.target.className.indexOf("icon-zhuanchu") < 0)
          ) {
            self.isShowBookList = true;
          } else {
            self.isShowBookList = false;
          }
        },
        false
      );
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/editor.scss";
</style>
