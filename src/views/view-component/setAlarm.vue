<template>
  <div
    id="alrmWrap"
    v-if="isShowSetAlarm"
    class="alarm-wrap"
    :style="{top:y+ 24+'px',left:x - 120 +'px'}"
  >
    <div class="arrow"></div>
    <div v-if="!showInfo">
      <div class="set-btn" @click="markCompalete()">标记完成</div>
      <div class="set-btn" @click="removeAlarm()">清除提醒</div>
      <div class="set-btn">修改日期</div>
    </div>
    <div v-if="showInfo">
      <div class=""><span></span>提醒已添加</div>
      <div class="set-btn">通知我</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "setAlarm",
  data() {
    return {};
  },
  methods: {
    markCompalete() {
      console.log(this.noteDetail);
    },
    removeAlarm() {
      this.$store.commit('removeAlarmData',this.noteDetail);
    }
  },
  props: {
    x: Number,
    y: Number,
    isShowSetAlarm: false,
    noteDetail: Object,
    showInfo: true
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.alarm-wrap {
  position: fixed;
  padding: 16px;
  background: #fff;
  border-radius: 4px;
  top: 20px;
  left: 0;
  z-index: 6;
  width: 240px;
  box-shadow: $box-shadow;
  border-top: 1px solid #eee;

  .set-btn {
    text-align: center;
    padding: 4px 0;
    border: 1px solid $color-primary;
    border-radius: 4px;
    color: $color-primary;
    margin: 8px 0;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: $color-primary;
      color: #fff;
    }
  }

  .arrow {
    position: absolute;
    top: -16px;
    left: 50%;
    height: 6px;
    width: 13px;
    overflow: hidden;
    transform: translate(-50%, 0);
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAGCAYAAAAYLBS/AAAARUlEQVR42mNgwAIePnzo++DBg+0gmoEY8OjRo8InT578//79+38QDeITpeH379//QQBE49WIrgEGcGrEpQGnRkIasGkEAFWir/D/XKWPAAAAAElFTkSuQmCC) -0px -0px
      no-repeat;
    background-size: 13px 6px;
    top: -6px;
  }
}
</style>


