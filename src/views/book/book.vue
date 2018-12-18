<template>
  <div>
    <div class="book-title-area">
      <h4>笔记本</h4>
      <div class="book-search">
        <Input search placeholder="查找笔记本"/>
      </div>
      <div class="add" title="新增笔记本" @click="createBook">
        <span class="iconfont icon-xinjianpushu"></span>
      </div>
    </div>
    <div class="book-list">
      <div class="book-item" v-for="(book,index) in $store.state.bookList" :key="index" @click="selectBook(book)">
        <div class="book-wrap">
          <div class="book-info">
            <div class="book-title">{{book.name}}</div>
            <div class="book-num">
              <span>{{book.noteList.length}}</span>条笔记
            </div>
          </div>
          <div class="handle">
            <div>
              <span class="iconfont icon-xingxing"></span>
            </div>
            <div>
              <span class="iconfont icon-shanchu" @click.stop="deleteBook(book)"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "book",
  data() {
    return {
    };
  },
  created(){
    
  },
  methods:{
    deleteBook(book){
     this.$Modal.confirm({
        showCancel: true,
        content: "您确定要删除这本书吗？",
        onCancel: () => {},
        onOk: () => {
          this.$store.commit("deletBook", book);
        }
     })
    },
    selectBook(book){
      this.$store.commit('selectBook',book);
    },
    createBook(){
      this.$store.commit('createBook');
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/book.scss";
</style>
