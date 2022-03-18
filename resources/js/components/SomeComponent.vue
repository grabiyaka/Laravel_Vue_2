<template>
  <div >
    <div>Color: {{ obj.color }}</div>
    <div>Number: {{ obj.number > 10 ? 'more 10' : 'less 10' }}</div>
    <div>Is published: {{ obj.isPublished ? 'Published' : 'Not Published'}}</div>
  </div>
 
</template>

<script>
export default {
  name: "SomeComponent",

  data() {
    return {
     
    };
  },

  props: [
    'obj'
  ],

  mounted(){
    this.$parent.$parent.$refs.index.indexLog()
    this.$parent.$parent.parentLog()
  },

  methods: {

  },

  computed: {},

  components: {},
};
</script>

<style scoped>
</style>