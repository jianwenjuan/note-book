<template>
  <div>
    <div class="book-title-area">
        <h4>笔记本</h4>
        <div class="book-search">
          <Input search placeholder="查找笔记本" />
        </div>
        <div class="add" title="新增笔记本">
          <span class="iconfont icon-xinjianpushu"></span>
        </div>
    </div>
    <div class="book-list">
      <div class="book-item">
        <div class="book-wrap">
          <div class="book-info">
            <div class="book-title">项目</div>
            <div class="book-num"><span>3</span>条笔记</div>
          </div>
            <div class="handle">
            <div><span class="iconfont icon-xingxing"></span></div>
            <div><span class="iconfont icon-shanchu"></span></div>
          </div>
        </div>
      </div>
       <div class="book-item">
        <div class="book-wrap">
          <div class="book-info">
            <div class="book-title">项目1</div>
            <div class="book-num"><span>3</span>条笔记</div>
          </div>
            <div class="handle">
            <div><span class="iconfont icon-xingxing"></span></div>
            <div><span class="iconfont icon-shanchu"></span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'book',
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/book.scss';
</style>
