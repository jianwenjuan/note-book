<template>
  <div>
    <div class="collection-title-area">
      <h4>快捷方式</h4>
    </div>
    <div class="collection-list">
      <div class="collection-item">
        <div class="collection-wrap">
          <div class="collection-info">
            <span class="iconfont icon-biji1"></span>
            <span>123</span>
          </div>
          <div class="handle">
            <span class="iconfont icon-delete"></span>
          </div>
        </div>
      </div>
      <div class="collection-item">
        <div class="collection-wrap">
          <div class="collection-info">
            <span class="iconfont icon-shuqian"></span>
            <span>123</span>
          </div>
          <div class="handle">
            <span class="iconfont icon-delete"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "collection",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/collection.scss";
</style>
