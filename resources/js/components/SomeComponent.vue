<template>
  <div >
  </div>
 
</template>

<script>
export default {
  name: "SomeComponent",

  data() {
    return {
     
    };
  },

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