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
                <div><span class="iconfont icon-biaoqian"></span><span class="text">新建标签</span></div>
            </div>

            <!-- 内容区域 -->
            <div class="editor-content">
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
@import '@/assets/css/editor.scss';

</style>
