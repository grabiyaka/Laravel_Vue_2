<template>
    <div>
        <single-post-component></single-post-component>
    </div>
</template>

<script>
import SinglePostComponent from './SinglePostComponent.vue'

export default {
    name: "PostComponent",

    components: {
        SinglePostComponent,  
    }
}

</script>

<style scoped>

</style>