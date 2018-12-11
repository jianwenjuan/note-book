<template>
  <div>
    <div class="lable-title-area">
      <h4>标签</h4>
      <div class="lable-search">
        <Input search placeholder="查找标签"/>
      </div>
      <div class="add" title="新增标签">
        <span class="iconfont icon-bookmark-add"></span>
      </div>
    </div>
    <div class="lable-list">
      <div class="lable-item">
        <div class="lable-title">1</div>
        <div class="lable-item-list">
          <div class="lable">
            12
            <span class="num">1</span>
          </div>
          <div class="handle">
            <span class="iconfont icon-store"></span>
            <span class="iconfont icon-bianji"></span>
            <span class="iconfont icon-shanchu1"></span>
          </div>
        </div>
        <div class="lable-item-list">
          <div class="lable">
            12
            <span class="num">1</span>
          </div>
          <div class="handle">
            <span class="iconfont icon-store"></span>
            <span class="iconfont icon-bianji"></span>
            <span class="iconfont icon-shanchu1"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "lableContent",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/lable.scss";
</style>
