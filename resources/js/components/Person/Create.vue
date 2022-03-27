<template>
  <div class="w-25">
    <div>Create</div>
    <div class="mb-3">
      <input type="text" placeholder="name" v-model="name" class="form-control" />
    </div>
    <div class="mb-3">
      <input type="number" placeholder="age" v-model="age" class="form-control" />
    </div>
    <div class="mb-3">
      <input type="text" placeholder="job" v-model="job" class="form-control" />
    </div>
    <div class="mb-3">
      <input :disabled="!isDisabled" @click.prevent="$store.dispatch('store', {name, age, job})" type="submit" value="Create" class="btn btn-primary" />
    </div>
  </div>
</template>

<script>

export default {
  name: "Create",

  data(){
      return {
          name: null,
          age: 0,
          job: null
      }
  },

  mounted(){
    
  },

  methods: {
    
  },

  computed: {
    isDisabled(){
       return this.name && this.age && this.job
    }
  }
};


</script>

<style>
</style>