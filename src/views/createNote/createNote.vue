<template>
    <div class="create-wrap">
        <editorComponent v-if="true" :isEditor="false"></editorComponent>
    </div>
</template>

<script>
import editorComponent from '@/component/noteEditor.vue'
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


