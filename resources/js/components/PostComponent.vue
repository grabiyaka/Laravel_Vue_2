<template>
    <div>
        <single-post-component></single-post-component>
        <div>Name: {{ name }}</div>
        <button @click="ohMy()">Click me pls</button>
    </div>
</template>

<script>
import SinglePostComponent from './SinglePostComponent.vue'

export default {
    name: "PostComponent",

    data() {
        return {
            name: 'Vasa',
            age: 21
        }
    },

    methods: {
        sayHello(){
            console.log('Hello');
        },
        ohMy(){
            console.log('Ohh..Myyy..')
        }
    },

    components: {
        SinglePostComponent,  
    }
}

</script>

<style scoped>

</style>