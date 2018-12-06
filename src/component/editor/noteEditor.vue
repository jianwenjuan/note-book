<template>
  <div class="editor-wrap">
    <!-- 编辑区域 -->
    <div class="editor-head">
      <div>
        <span class="iconfont icon-book"></span>
        <span class="text">项目</span>
        <span class="iconfont icon-jiantouxia"></span>
      </div>
      <div>
        <span class="iconfont icon-biaoqian"></span>
        <span class="text">新建标签</span>
      </div>
    </div>

    <!-- 内容区域 -->
    <div class="editor-content">
      <div class="content-title">
          <input type="text" :value="noteDetail.title">
      </div>
      <div class="content-detail">
          <textarea :value="noteDetail.primary">
          </textarea>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "editor",
  data() {
    return {};
  },
  props: {
    isEditor: {
    },
    noteDetail: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/editor.scss";
</style>
