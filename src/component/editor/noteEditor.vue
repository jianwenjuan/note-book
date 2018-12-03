<template>
    <div class="editor-wrap">
        <!-- 操作区域 -->
        <div class="handler-area">
            <div>
                <span class="iconfont icon-alarmclock"></span>
            </div>
            <div>
                <span class="iconfont icon-xingxing"></span>
            </div>
            <div>
                <span class="iconfont icon-shanchu"></span>
            </div>
        </div>

        <!-- 编辑区域 -->
        <div class="editor-area">
            <div class="editor-head">
                <div><span class="iconfont icon-book"></span><span class="text">项目</span><span class="iconfont icon-jiantouxia"></span></div>
                <div></div>
            </div>

        </div>
    </div>
</template>
<script>

export default {
  name: 'editor',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.handler-area{
  >div{
    display: inline-block;
    margin-right: 8px;
    cursor: pointer;

    .iconfont{
        font-size: 20px;
        font-weight: 600;
        color: #999;

    }
  }
}
.editor-area{
    padding:16px 16px 16px 0;
    margin-left: 16px;
    color: #999;
    border-bottom: 1px solid $color-border;
    cursor: pointer;

    .text{
        margin:0 8px;
    }

    .iconfont{
        font-size: 10px;
        color: #999;
    }
}

</style>
