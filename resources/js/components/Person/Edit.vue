<template>
  <div class="w-25">
    <div>Edit</div>
    <div class="mb-3">
      <input
        type="text"
        placeholder="name"
        v-model="name"
        class="form-control"
      />
    </div>
    <div class="mb-3">
      <input
        type="number"
        placeholder="age"
        v-model="age"
        class="form-control"
      />
    </div>
    <div class="mb-3">
      <input type="text" placeholder="job" v-model="job" class="form-control" />
    </div>
    <div class="mb-3">
      <input
        :disabled="!isDisabled"
        @click.prevent="update"
        type="submit"
        value="Edit"
        class="btn btn-primary"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: "Edit",

  data() {
    return {
      name: null,
      age: 0,
      job: null,
    };
  },

  mounted() {
    //console.log(this.$route.params);
    this.getPerson()
  },

  methods: {
    getPerson() {
      axios.get( `/api/people/${this.$route.params.id}`).then( res => {
          console.log(res);
          this.name = res.data.data.name
          this.age = res.data.data.age
          this.job = res.data.data.job
      }); 
    },

    update(){
        axios.patch(`/api/people/${this.$route.params.id}`, {name: this.name, age: this.age, job: this.job,})
        .then( res => {
            this.$router.push( {name: 'people.show', params: {id: this.$route.params.id}} )
        })
    }
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