<template>
    <div class="alarm-wrap" :style="{top:y+ 24+'px',left:x - 120 +'px'}">
        <div class="arrow"></div>
        <div class="set-btn">标记完成</div>
        <div class="set-btn">清除提醒</div>
        <div class="set-btn">修改日期</div>
    </div>
</template>

<script>
export default {
    name: 'setAlarm',
    data() {

    },
    props: {
        x:Number,
        y:Number

    },
    computed:{
    }
}
</script>

<style lang="scss" scoped>
.alarm-wrap{
    position: fixed;
    padding: 16px;
    background: #fff;
    border-radius: 4px;
    top: 20px;
    left: 0;
    z-index: 6;
    width: 240px;
    box-shadow: $box-shadow;

    .set-btn{
        text-align: center;
        padding: 4px 0;
        border: 1px solid $color-primary;
        border-radius: 4px;
        color: $color-primary;
        margin: 8px 0;
        cursor: pointer;
        transition: all .2s;

        &:hover{
            background: $color-primary;
            color: #fff;
        }
    }

    .arrow{
        position: absolute;
        top: -16px;
        left: 50%;
        margin-left: -4px;
        width: 0;
        height: 0;
        border-width: 8px;
        border-style: solid;
        border-color: transparent transparent #fff transparent;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04), -6px 8px 15px rgba(0, 0, 0, 0.04), 6px 8px 15px rgba(0, 0, 0, 0.04);

    }


}

</style>


