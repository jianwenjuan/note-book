<template>
  <div class="modal-container" v-show="visible">
    <div class="modal-mask" v-if="isShowMask"></div>
    <div class="modal-panel">
      <div class="modal-close" @click="close">
        <span class="iconfont icon-guanbi"></span>
      </div>
      <header class="modal-title">
        <slot name="header"></slot>
      </header>
      <main>
        <slot name="content"></slot>
      </main>
      <footer class="modal-footer" v-show="isShowFooter">
        <slot name="footer">
          <button class="cancel" @click="cancel">取消</button>
          <button class="confirm" @click="confirm">确定</button>
        </slot>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: "Modal",
  data() {
    return {
      visible: this.value
    };
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    isShowMask: {
      default: true
    },
    isShowFooter: {
      default: true
    },
    okCallback: Function,
    cancelCallback: Function
  },
  methods: {
    cancel() {
      this.visible = false;
      this.cancelCallback();
    },
    confirm() {
      this.visible = false;
      this.okCallback();
    },
    close() {
      this.visible = false;
      this.$emit("on-close");
    }
  },
  watch:{
    value (val) {
      this.visible = val;
    }
  }
};
</script>
<style lang="scss" scoped>
.modal-container {
  .modal-mask {
    background: rgba($color: #000000, $alpha: 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
  }

  .modal-panel {
    background: #fff;
    background: #fff;
    min-width: 600px;
    min-height: 300px;
    border-radius: 4px;
    box-shadow: $box-shadow;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 101;
    display: flex;
    flex-direction: column;

    header {
      height: 56px;
      padding-left: 32px;
      line-height: 56px;
      font-size: 18px;
      color: $color-primary;
      font-weight: bold;
    }

    main {
      flex: 1;
      padding: 0 32px;
    }

    footer {
      height: 56px;
      text-align: center;

      button {
        appearance: none;
        width: 200px;
        height: 32px;
        border-radius: 4px;
        line-height: 32px;
        cursor: pointer;
        box-shadow: none;
        outline: none;
        border: none;
        margin: 0 4px;

        &.cancel {
          color: #999;
          border: 1px solid $color-border;
          background: #fff;

          &:hover {
            border-color: $color-primary;
            color: $color-primary;
          }
        }

        &.confirm {
          background: $color-primary;
          color: #fff;

          &:hover {
            background: darken($color-primary, 10%);
          }
        }
      }
    }

    .modal-close {
      position: absolute;
      right: 16px;
      top: 8px;
      cursor: pointer;
      .iconfont {
        font-size: 12px;
      }

      &:hover {
        .iconfont {
          color: $color-primary;
        }
      }
    }
  }
}
</style>


