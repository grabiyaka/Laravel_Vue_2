<template>
  <div class="w-25">
    <div class="mb-3">
      <input type="text" class="form-control" v-model="name" id="name" placeholder="name">
    </div>
    <div class="mb-3">
      <input type="number" class="form-control" v-model="age" id="age" placeholder="age">
    </div>
    <div class="mb-3">
      <input type="text" class="form-control" v-model="job" id="job" placeholder="job">
    </div>
    <div><input @click.prevent="addPerson" value="Add" class="btn btn-primaty" ></div>
    <SomeComponent :obj="obj"></SomeComponent>
  </div>
 
</template>

<script>
import SomeComponent from './SomeComponent'
export default {
  name: "CreateComponent",

  data() {
    return {
      name: null,
      age: null,
      job: null,
      obj: {
        color: 'ping',
        number: 9,
        isPublished: true
      }
    };
  },

  mounted(){
    this.$parent.$refs.index.indexLog()
  },

  comments: {
    SomeComponent
  },

  methods: {
     addPerson(){
      axios.post('/api/people', {name: this.name, age: this.age, job: this.job})
      .then(data => {
        console.log(data)
        this.name = null
        this.age = null
        this.job = null
        this.$parent.$refs.index.getPeople()
      })
    }
  },

  computed: {},

  components: {SomeComponent},
};
</script>

<style scoped>
</style>