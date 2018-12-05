<template>
  <div>
    <div class="share-title-area">
      <h4>工作群聊</h4>
      <div class="share-search">
        <Input search placeholder="搜索联系人或群聊消息"/>
      </div>
      <div class="add" title="开始群聊">
        <span class="iconfont icon-qunliao"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "shareComponent",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/share.scss";
</style>
