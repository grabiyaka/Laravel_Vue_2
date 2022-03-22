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
      <input @click.prevent="store" type="submit" value="Create" class="btn btn-primary" />
    </div>
  </div>
</template>

<script>

import router from "../../router";

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
      store(){
          axios.post('/api/people', {name: this.name, age: this.age, job: this.job} )
          .then(res => {
            router.push({name: 'people.index'})
          })
      }
  }
};


</script>

<style>
</style>