<template>
    <div class="create-wrap">
        <editorComponent></editorComponent>
    </div>
</template>

<script>
import editorComponent from '@/component/editor/noteEditor.vue'
export default {
    name: 'createNote',
    data() {
        return {

        }
    },
    components:{editorComponent}
}
</script>
<style lang="scss" scoped>
.create-wrap{
    padding: 16px 32px;
}

</style>


