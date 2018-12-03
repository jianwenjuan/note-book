<template>
  <div class="note-home">
    <!-- 左侧 -->
    <div class="note-list-area">
      <ul>
        <li></li>
        <li>2</li>
        <li>2</li>
      </ul>
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
    width: 300px;
    height: 100%;
    border-right: 1px solid #ccc;
  }

  .note-detail-area{
    flex: 1;
    padding:16px 32px;
  }
}
</style>
